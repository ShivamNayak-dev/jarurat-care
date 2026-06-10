import { useState } from 'react'

const inputStyle = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid var(--border)', borderRadius: 8,
  fontSize: 14, background: 'var(--white)',
  color: 'var(--charcoal)', outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: '80px 24px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'start' }}>

        {/* Left */}
        <div>
          <p style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Reach Out</p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--charcoal)', marginBottom: 16 }}>We'd love to hear from you</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 14, marginBottom: 36 }}>
            Have a question, want to partner with us, or just need someone to talk to? Our team responds to every message.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              ['📧', 'Email Us', 'support@jaruratcare.org'],
              ['📞', 'Call Us', '+91 98100 00000'],
              ['📍', 'Location', 'New Delhi, India'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>{label}</div>
                  <div style={{ fontSize: 14, color: 'var(--charcoal)', marginTop: 2 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>💚</div>
              <h3 style={{ color: 'var(--green)', marginBottom: 8, fontFamily: 'Lora, serif' }}>Message received!</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}>We'll get back to you within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name:'',email:'',subject:'',message:'' }) }}
                style={{ marginTop: 20, background: 'transparent', border: '1.5px solid var(--border)', color: 'var(--charcoal)', padding: '8px 20px', borderRadius: 8, fontSize: 13 }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Name *</label>
                  <input name="name" required value={form.name} onChange={handle} placeholder="Your name" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Subject</label>
                <input name="subject" value={form.subject} onChange={handle} placeholder="How can we help?" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--green)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Message *</label>
                <textarea name="message" required value={form.message} onChange={handle} rows={4}
                  placeholder="Tell us what's on your mind..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--green)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <button type="submit" disabled={loading} style={{
                background: loading ? 'var(--green-light)' : 'var(--green)',
                color: 'white', padding: '12px', borderRadius: 8,
                fontWeight: 500, fontSize: 14, marginTop: 4,
              }}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
