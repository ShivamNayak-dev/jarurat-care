import { useState } from 'react'

const inputStyle = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid var(--border)', borderRadius: 8,
  fontSize: 14, background: 'var(--white)',
  color: 'var(--charcoal)', outline: 'none',
  transition: 'border-color 0.2s',
}

export default function RegistrationForm() {
  const [type, setType] = useState('patient')
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <section id="register" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 52, marginBottom: 20 }}>🌿</div>
        <h2 style={{ fontSize: 28, color: 'var(--green)', marginBottom: 12 }}>You're registered!</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
          Thank you for reaching out. Our team will connect with you within 24–48 hours. You're not alone in this journey.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',city:'',message:'' }) }}
          style={{ marginTop: 28, background: 'var(--green)', color: 'white', padding: '10px 24px', borderRadius: 8, fontSize: 14 }}>
          Submit Another
        </button>
      </div>
    </section>
  )

  return (
    <section id="register" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Get Support</p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--charcoal)' }}>Register with us</h2>
          <p style={{ color: 'var(--muted)', marginTop: 10, fontSize: 14 }}>Whether you're a patient, caregiver, or volunteer — we have a place for you.</p>
        </div>

        {/* Type selector */}
        <div style={{ display: 'flex', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 10, padding: 4, marginBottom: 28 }}>
          {['patient', 'caregiver', 'volunteer'].map(t => (
            <button key={t} onClick={() => setType(t)} style={{
              flex: 1, padding: '9px 0', borderRadius: 7, fontSize: 13, fontWeight: 500,
              background: type === t ? 'var(--green)' : 'transparent',
              color: type === t ? 'white' : 'var(--muted)',
              transition: 'all 0.2s', textTransform: 'capitalize',
            }}>{t}</button>
          ))}
        </div>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Full Name *</label>
              <input name="name" required value={form.name} onChange={handle} placeholder="Priya Sharma" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--green)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Phone Number *</label>
              <input name="phone" required value={form.phone} onChange={handle} placeholder="+91 98765 43210" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--green)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Email Address *</label>
            <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@email.com" style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--green)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>City</label>
            <input name="city" value={form.city} onChange={handle} placeholder="Delhi, Mumbai, Bangalore..." style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--green)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>

          {type === 'volunteer' && (
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>How would you like to help?</label>
              <textarea name="message" value={form.message} onChange={handle} rows={3}
                placeholder="e.g. Weekend visits, fundraising, awareness campaigns..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--green)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
          )}

          {type === 'patient' && (
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Brief about your situation (optional)</label>
              <textarea name="message" value={form.message} onChange={handle} rows={3}
                placeholder="Share as much or as little as you're comfortable with..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--green)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
          )}

          <button type="submit" disabled={loading} style={{
            background: loading ? 'var(--green-light)' : 'var(--green)',
            color: 'white', padding: '13px', borderRadius: 9,
            fontWeight: 500, fontSize: 15, marginTop: 4,
            transition: 'background 0.2s',
          }}>
            {loading ? 'Submitting...' : `Register as ${type.charAt(0).toUpperCase() + type.slice(1)}`}
          </button>
        </form>
      </div>
    </section>
  )
}
