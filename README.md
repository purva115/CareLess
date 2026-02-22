# CareLess 💙  
Less Confusion. Less Stress. More Care.

CareLess is a healthcare financial clarity platform designed to help students understand, predict, and manage medical expenses across the full healthcare journey.

It combines cost forecasting, bill simplification, generative AI explanations, voice assistance, a blockchain-powered emergency fund, and a centralized dashboard.

---

## 🚀 Core Components

### 1️⃣ PreVisit — Cost Prediction

Estimate medical expenses before seeing a provider.

- Input insurance details (deductible, copay, coinsurance)
- Calculate estimated total treatment cost
- Calculate estimated out-of-pocket cost
- AI-generated explanation of how costs were derived
- Optional voice narration using ElevenLabs

This helps students understand financial impact before scheduling care.

---

### 2️⃣ PostVisit — Bill & EOB Simplification

Upload an Explanation of Benefits (EOB) or medical bill (PDF).

- Extract service line items
- Translate CPT codes and insurance jargon into plain English
- Structured breakdown:
  - Charge
  - Allowed amount / network discount
  - Insurance paid
  - Patient responsibility
- Generate:
  - Appeal checklist
  - Suggested call script for insurance/billing office

This transforms complex billing documents into actionable insights.

---

### 3️⃣ Dashboard — Financial Overview

A centralized view of the user’s healthcare financial journey.

- Track estimated costs
- View uploaded bill summaries
- Monitor out-of-pocket trends
- Review AI-generated explanations
- See donation activity (if wallet connected)

The dashboard provides clarity across all interactions within CareLess.

---

### 4️⃣ Community — Student Emergency Fund

A transparent blockchain-powered support system.

- Donate using Phantom Wallet
- Built on Solana
- On-chain confirmation
- Configurable network (devnet / mainnet)

Supports students facing unexpected medical costs.

---

## 🧠 Generative AI Integration

CareLess uses the Google Gemini API to:

- Extract structured data from uploaded EOB PDFs
- Convert medical and insurance terminology into plain language
- Generate personalized explanations of cost calculations
- Create appeal guidance and call scripts

ElevenLabs is used for text-to-speech narration of AI-generated explanations.

---

## 🏗 Tech Stack

### Frontend
- React
- Vite

### Backend
- Node.js
- Express
- PDF parsing
- Rule-based insurance calculation engine

### AI
- Google Gemini API
- ElevenLabs (Text-to-Speech)

### Blockchain
- Solana
- Phantom Wallet

> Note: This project does not use MongoDB.

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=
VITE_ELEVENLABS_API_KEY=
VITE_ELEVENLABS_VOICE_ID=
VITE_DONATION_WALLET=
VITE_SOLANA_CLUSTER=devnet

⚠️ Do not commit your .env file. Ensure it is added to .gitignore.

🛠 Installation & Setup
git clone https://github.com/<your-username>/careless.git
cd careless
npm install
npm run dev

Application runs at:

http://localhost:5173
🎬 Demo Flow

PreVisit → Enter insurance details → View AI explanation

PostVisit → Upload EOB → View simplified breakdown

Dashboard → Review financial summary

Community → Connect Phantom → Donate → View on-chain confirmation

🎯 Mission

CareLess reduces financial anxiety in healthcare by turning complex insurance systems into clear, understandable insights — empowering students to make informed decisions.


