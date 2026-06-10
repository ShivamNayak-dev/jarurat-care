import { useState, useRef, useEffect } from 'react'

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const SYSTEM_PROMPT = `You are a compassionate support assistant for Jarurat Care, India's cancer care community NGO.
Your role is to answer FAQs about cancer support, caregiver resources, volunteering, and the organization.
Keep answers warm, concise, and human. Never provide medical diagnoses or treatment advice — always recommend consulting a doctor.
If someone seems distressed, be empathetic and remind them they are not alone.

Key info about Jarurat Care:
- We support cancer patients and caregivers across India
- We have 5000+ families supported, 120+ volunteers, 18 cities
- We offer caregiver mentorship, emotional support groups, and awareness campaigns
- Registration is free — patients, caregivers, and volunteers can all register
- Contact: support@jaruratcare.org | +91 98100 00000
- We respond to all messages within 24–48 hours`

const suggestedQuestions = [
  'How can I register as a volunteer?',
  'What support is available for caregivers?',
  'Is registration free?',
  'How do I join a support group?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi 👋 I\'m here to help with any questions about Jarurat Care — support options, volunteering, or just how we work. What\'s on your mind?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiKeyMissing, setApiKeyMissing] = useState(!GEMINI_API_KEY)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return
    const userMsg = { role: 'user', text }
    setMessages(m => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      const history = [...messages, userMsg].map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }))

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: history,
            generationConfig: { maxOutputTokens: 300, temperature: 0.7 }
          })
        }
      )
      const data = await res.json()
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that. Please try again."
      setMessages(m => [...m, { role: 'assistant', text: reply }])
    } catch {
      setMessages(m => [...m, { role: 'assistant', text: 'Something went wrong. Please try again or email us at support@jaruratcare.org' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating button */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 200,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--green)', color: 'white',
        boxShadow: '0 4px 20px rgba(45,106,79,0.35)',
        fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        title="Chat with us"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 96, right: 28, zIndex: 200,
          width: 360, maxHeight: 520,
          background: 'var(--white)', borderRadius: 16,
          boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
          display: 'flex', flexDirection: 'column',
          border: '1px solid var(--border)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ background: 'var(--green)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22 }}>🌿</span>
            <div>
              <div style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>Jarurat Care Assistant</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 11 }}>Typically replies in seconds</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {apiKeyMissing && (
              <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '10px 12px', fontSize: 12, color: '#856404' }}>
                ⚠️ Add your Gemini API key in <code>.env</code> as <code>VITE_GEMINI_API_KEY</code> to enable the chatbot.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 13px', borderRadius: 12,
                  fontSize: 13, lineHeight: 1.6,
                  background: m.role === 'user' ? 'var(--green)' : 'var(--cream)',
                  color: m.role === 'user' ? 'white' : 'var(--charcoal)',
                  borderBottomRightRadius: m.role === 'user' ? 3 : 12,
                  borderBottomLeftRadius: m.role === 'assistant' ? 3 : 12,
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', gap: 5, padding: '10px 13px', background: 'var(--cream)', borderRadius: 12, width: 60, borderBottomLeftRadius: 3 }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    width: 7, height: 7, borderRadius: '50%', background: 'var(--green-light)',
                    animation: 'bounce 1.2s ease infinite',
                    animationDelay: `${i * 0.2}s`,
                    display: 'inline-block',
                  }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div style={{ padding: '0 14px 10px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {suggestedQuestions.map(q => (
                <button key={q} onClick={() => sendMessage(q)} style={{
                  fontSize: 11, padding: '5px 10px', borderRadius: 20,
                  border: '1px solid var(--border)', background: 'var(--cream)',
                  color: 'var(--green)', cursor: 'pointer', textAlign: 'left',
                }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8 }}>
            <input
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask anything..."
              disabled={apiKeyMissing}
              style={{
                flex: 1, padding: '9px 12px', border: '1.5px solid var(--border)',
                borderRadius: 8, fontSize: 13, outline: 'none', color: 'var(--charcoal)',
              }}
            />
            <button onClick={() => sendMessage(input)} disabled={!input.trim() || loading || apiKeyMissing} style={{
              background: 'var(--green)', color: 'white', padding: '0 14px',
              borderRadius: 8, fontSize: 16,
              opacity: (!input.trim() || loading || apiKeyMissing) ? 0.5 : 1,
            }}>➤</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}
