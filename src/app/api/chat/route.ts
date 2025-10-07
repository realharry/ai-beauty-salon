import { NextResponse } from "next/server"
import { OpenAI } from "openai"
import { queryRAG } from "@/lib/rag/chroma"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
})

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Query RAG system for relevant context
    const relevantDocs = await queryRAG(message, 3)
    const context = relevantDocs.join("\n\n")

    // Build conversation history
    const messages = [
      {
        role: "system" as const,
        content: `You are a helpful and friendly beauty salon assistant for Glamour Haven, a premium beauty salon in San Diego. 

Use the following information to answer questions accurately:
${context}

Guidelines:
- Be warm, professional, and helpful
- Help customers schedule appointments by providing contact information
- Answer questions about services, pricing, and hours
- If you don't know something, suggest they call (619) 555-GLAM or email info@glamourhaven.com
- Be enthusiastic about beauty and wellness
- Keep responses concise but informative
- Always be polite and customer-focused`
      },
      ...history.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: "user" as const,
        content: message
      }
    ]

    // If OpenAI API key is not available, use fallback
    if (!process.env.OPENAI_API_KEY) {
      const fallbackResponse = generateFallbackResponse(message)
      return NextResponse.json({ message: fallbackResponse })
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    })

    const assistantMessage = completion.choices[0]?.message?.content || 
      "I apologize, but I'm having trouble responding right now. Please call us at (619) 555-GLAM for assistance."

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    
    // Return a helpful fallback message
    return NextResponse.json({
      message: "I'm here to help! You can reach us at (619) 555-GLAM or info@glamourhaven.com. We're open Monday-Friday 9 AM - 8 PM, Saturday 9 AM - 6 PM, and Sunday 10 AM - 5 PM."
    })
  }
}

function generateFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  // Simple keyword-based responses
  if (lowerMessage.includes("hour") || lowerMessage.includes("open") || lowerMessage.includes("time")) {
    return "We're open Monday-Friday 9:00 AM - 8:00 PM, Saturday 9:00 AM - 6:00 PM, and Sunday 10:00 AM - 5:00 PM. Feel free to call us at (619) 555-GLAM to schedule an appointment!"
  }
  
  if (lowerMessage.includes("appointment") || lowerMessage.includes("book") || lowerMessage.includes("schedule")) {
    return "I'd be happy to help you schedule an appointment! Please call us at (619) 555-GLAM or email info@glamourhaven.com. You can also visit us at 123 Fashion Avenue, San Diego, CA 92101."
  }
  
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
    return "Our services range from $15 for simple treatments to $300 for premium services. Some popular options include: Manicures ($35-$50), Facials ($85-$140), Haircuts ($35-$95), and Massages ($95-$140). What service are you interested in?"
  }
  
  if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("where")) {
    return "We're located at 123 Fashion Avenue, San Diego, CA 92101. You can reach us at (619) 555-GLAM or info@glamourhaven.com."
  }
  
  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you")) {
    return "We offer a full range of beauty services including hair services (cuts, coloring, styling), nail services (manicures, pedicures), facial treatments, massage therapy, waxing, and makeup services. What service interests you most?"
  }
  
  // Default response with context
  return "Thank you for your interest in Glamour Haven! For detailed information about our services, pricing, and to schedule an appointment, please call us at (619) 555-GLAM or email info@glamourhaven.com. We're here Monday-Friday 9 AM - 8 PM. How else can I help you?"
}
