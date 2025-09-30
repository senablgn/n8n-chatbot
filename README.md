# Jot Chatbot - AI Destekli Lead Yönetimi ve Bilgi Platformu

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![n8n](https://img.shields.io/badge/n8n-Workflow%20Automation-blue.svg)](https://n8n.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue.svg)](https://www.postgresql.org/)
[![MCP](https://img.shields.io/badge/MCP-Protocol-orange.svg)](https://modelcontextprotocol.io/)

This project is an AI-powered system developed to automate customer communication and lead (potential customer) management processes for users of a language learning platform. It is built on n8n-based visual workflow management, Node.js services, MCP (Model Context Protocol) infrastructure, and PostgreSQL database. This enables natural language interaction with users while providing automated data flow for sales and support teams.

## Features

- Analyzes user messages and directs them to the appropriate workflow (information query or lead registration).
- Multi-step lead collection: Gathers name-surname, course preference, contact information, and saves to the database.
- Information and FAQ management: Provides fast and relevant responses using Pinecone vector database.
- Embedding process: Processes new documents to keep the knowledge base up-to-date.

### Core Technologies
- **n8n Workflow Automation Platform**: Workflow otomasyon platformu
- **Pinecone Vector Store**: Provides long-term memory for the chatbot. Enables fast search and scalability.
- **Node.js**: For backend services
- **PostgreSQL**: VeStores user conversations, lead records, and temporary memory data. Preserves context in multi-step dialogues.ritabanı
- **MCP (Model Context Protocol)**: Acts as a bridge between n8n and APIs. Uses SSE for real-time communication.
- **Google Gemini 2.5 Flash**:Handles natural language understanding and response generation
- **OpenAI GPT-3.5 Turbo**: Synthesizes complex prompts and handles embedding.
- **OpenAI Embeddings**: Vectorization operations

## Services
- **mcp-server**: Acts as a bridge between n8n workflows and various APIs. Tools: search (searches course information) and create-user (registers users). Communicates via SSE.
- **lead-api**: Processes lead data from n8n via MCP Tool and registers new users to the PostgreSQL database. Validates and applies business logic to incoming data.

### Installation and Running
## Requirements
- Node.js
- PostgreSQL
- n8n (self-hosted veya cloud)
- Pinecone account
- Google Cloud and OpenAI API keys
- ngrok (for testing)

## Steps

### 1. Clone the repository
```bash
git clone <repository-url>
cd chatbot
```

### 2. MCP Server Installation
```bash
cd mcp-server
npm install
```

### 3.  Lead API Installation
```bash
cd ../lead-api
npm install
```


# .env dosyasını yapılandırın
cp .env.example .env
# PostgreSQL bağlantı bilgilerini girin


## Usage

### 1. Start MCP Server
```bash
cd mcp-server
node index.js
# The server will run at http://localhost:3001
```

### 2. Start Lead API
```bash
cd lead-api
node index.js
# The server will run at http://localhost:3000
```

### 3. Start Course API
```bash
cd course-api
node index.js
# The server will run at http://localhost:3002
```

### 3. Import n8n Workflows
1. Open the n8n dashboard
2. Import each workflow file in turn:
   - `info/chatbot.json`
   - `lead/lead.json`
   - `info/info.json`
   - `info/embedding.json`


