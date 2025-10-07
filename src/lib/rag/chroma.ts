import { ChromaClient } from "chromadb"
import { salonData } from "./data"

let chromaClient: ChromaClient | null = null
const COLLECTION_NAME = "salon_knowledge"

export async function getChromaClient() {
  if (!chromaClient) {
    chromaClient = new ChromaClient({
      path: process.env.CHROMA_URL || "http://localhost:8000"
    })
  }
  return chromaClient
}

export async function initializeRAG() {
  try {
    const client = await getChromaClient()

    // Try to get or create collection
    let collection
    try {
      collection = await client.getOrCreateCollection({
        name: COLLECTION_NAME,
      })

      // Check if collection is empty
      const count = await collection.count()
      
      if (count === 0) {
        // Add documents to collection
        await collection.add({
          ids: salonData.map(d => d.id),
          documents: salonData.map(d => d.content),
          metadatas: salonData.map(d => d.metadata),
        })
        console.log("Initialized ChromaDB with salon data")
      }
    } catch (error) {
      console.error("Error with ChromaDB collection:", error)
      collection = null
    }

    return collection
  } catch (error) {
    console.error("Error initializing RAG:", error)
    return null
  }
}

export async function queryRAG(query: string, nResults: number = 3) {
  try {
    const client = await getChromaClient()

    const collection = await client.getCollection({
      name: COLLECTION_NAME,
    })

    const results = await collection.query({
      queryTexts: [query],
      nResults: nResults,
    })

    return results.documents[0] || []
  } catch (error) {
    console.error("Error querying RAG:", error)
    // Return static fallback data
    return salonData.slice(0, nResults).map(d => d.content)
  }
}
