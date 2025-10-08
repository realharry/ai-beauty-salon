# Glamour Haven - AI Beauty Salon

A modern, elegant beauty salon website built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. Features an intelligent LLM RAG chatbot for customer service, appointment scheduling assistance, and answering beauty-related questions.

![Beauty Salon Website](https://github.com/user-attachments/assets/fe42d1c1-4293-4080-92ec-72d4560c7c8c)

## Features

✨ **Modern Design**
- Elegant, responsive design optimized for all devices
- Beautiful pink and rose color scheme reflecting beauty and wellness
- Smooth animations and transitions
- Dark/Light mode toggle with system preference detection

💇 **Service Information**
- Comprehensive service listings with pricing
- Hair services (cuts, coloring, styling, treatments)
- Nail services (manicures, pedicures, nail art)
- Facial treatments (various rejuvenating facials)
- Massage therapy (Swedish, deep tissue, hot stone, etc.)
- Waxing and makeup services
- Gallery showcasing salon facilities

📅 **Business Details**
- Operating hours clearly displayed
- Location and contact information
- Interactive navigation menu
- Smooth scroll to sections

🤖 **AI Chatbot Assistant**
- Powered by OpenAI GPT models
- RAG (Retrieval Augmented Generation) using ChromaDB
- Answers questions about services, pricing, and hours
- Assists with appointment scheduling
- Fallback responses when API is unavailable

![Chatbot Interaction](https://github.com/user-attachments/assets/c0922cf7-4778-4882-9aac-12139b6e7c0d)

## Technology Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI (Radix UI primitives)
- **Theme:** next-themes for dark/light mode
- **Icons:** Lucide React
- **AI/LLM:** OpenAI GPT-3.5-turbo
- **Vector Database:** ChromaDB for RAG
- **Deployment Ready:** Optimized production build

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- (Optional) OpenAI API key for chatbot functionality
- (Optional) ChromaDB instance for RAG features

### Installation

1. Clone the repository:
```bash
git clone https://github.com/realharry/ai-beauty-salon.git
cd ai-beauty-salon
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables (optional):
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
# OpenAI API Key for chatbot (optional but recommended)
OPENAI_API_KEY=your_openai_api_key_here

# ChromaDB URL (optional, defaults to http://localhost:8000)
CHROMA_URL=http://localhost:8000
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
ai-beauty-salon/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/          # Chatbot API endpoint
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles & theme colors
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── switch.tsx
│   │   ├── salon/             # Salon-specific components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Hours.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Chatbot.tsx
│   │   │   └── Footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       ├── utils.ts           # Utility functions
│       └── rag/
│           ├── data.ts        # Salon business data
│           └── chroma.ts      # ChromaDB RAG functions
├── public/                    # Static assets
├── .env.example              # Environment variables template
└── package.json
```

## Features Details

### Chatbot Functionality

The chatbot uses a sophisticated RAG (Retrieval Augmented Generation) approach:

1. **Data Storage:** Business information is stored in ChromaDB as vector embeddings
2. **Query Processing:** User questions are converted to embeddings and matched against stored data
3. **Response Generation:** OpenAI GPT models generate natural, contextual responses
4. **Fallback Mode:** If APIs are unavailable, uses keyword-based responses

The chatbot can answer questions about:
- Service offerings and pricing
- Business hours
- Location and contact information
- Appointment scheduling process
- General beauty-related inquiries

### Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

### Theme System

Built-in dark/light mode with:
- System preference detection
- Manual toggle switch
- Smooth transitions
- Persistent theme selection
- OKLCH color space for consistent colors

## Customization

### Updating Salon Information

Edit `src/lib/rag/data.ts` to update:
- Services and pricing
- Business hours
- Contact information
- Location details

### Changing Color Scheme

Modify `src/app/globals.css` to customize the color palette:
```css
@theme {
  --color-primary: oklch(60% 0.22 350); /* Pink/Rose accent */
  --color-secondary: oklch(92% 0.08 80); /* Soft yellow */
  /* ... other color variables ... */
}
```

### Adding New Services

Update the `services` array in `src/components/salon/Services.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | No* | OpenAI API key for chatbot responses |
| `CHROMA_URL` | No | ChromaDB instance URL (defaults to localhost:8000) |

*The chatbot will work without API keys using fallback keyword-based responses, but API keys are recommended for better responses.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or support:
- Create an issue on GitHub
- Contact: info@glamourhaven.com (demo contact)

---

Built with ❤️ for beauty and wellness professionals
