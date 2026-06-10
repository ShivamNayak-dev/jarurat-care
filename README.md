# Jarurat Care — Healthcare Support Web App

A mini web application built for Jarurat Care, an NGO dedicated to building India's largest cancer care community.

## 🌐 Live Demo
> https://jarurat-care-iota.vercel.app/

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Pure CSS (CSS Variables, no framework) |
| AI Chatbot | Google Gemini 1.5 Flash API |
| Deployment | Vercel |

## 🤖 AI Feature — FAQ Chatbot

The app includes a real AI-powered chatbot built using the **Google Gemini 1.5 Flash** model. It's designed to:
- Answer common questions about Jarurat Care (registration, volunteering, support options)
- Provide compassionate, context-aware responses for cancer patients and caregivers
- Redirect medical questions to professionals (does not give medical advice)
- Suggest quick-reply topics for first-time users

This demonstrates how NGOs can use AI to handle high FAQ volume without human resources — freeing volunteers and staff to focus on direct care.

## 🏥 NGO Use Case

Jarurat Care supports cancer patients and families across India. This app solves three real problems:
1. **Registration bottleneck** — patients and volunteers can self-register without phone calls
2. **Information overload** — the AI chatbot answers repetitive FAQs instantly, 24/7
3. **Communication gap** — the contact form ensures no message goes unheard

## 🚀 Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/jarurat-care.git
cd jarurat-care

# 2. Install dependencies
npm install

# 3. Add your Gemini API key
cp .env.example .env
# Edit .env and add your key: VITE_GEMINI_API_KEY=your_key_here

# 4. Start dev server
npm run dev
```

## 🔑 Getting a Free Gemini API Key

1. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy and paste into your `.env` file

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with scroll effect
│   ├── Hero.jsx            # Landing section with stats
│   ├── About.jsx           # Mission and values
│   ├── RegistrationForm.jsx # Patient / Caregiver / Volunteer form
│   ├── ContactForm.jsx     # General contact form
│   ├── FAQ.jsx             # Accordion FAQ section
│   ├── Chatbot.jsx         # AI-powered floating chatbot
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css               # Global styles + CSS variables
```

## 🌍 Deployment (Vercel)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add environment variable: `VITE_GEMINI_API_KEY`
4. Deploy — done!
