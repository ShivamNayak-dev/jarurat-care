import { useState } from 'react'

const faqs = [
  { q: 'Who can register with Jarurat Care?', a: 'Anyone affected by cancer — patients, their family members, caregivers, or friends — can register. We also welcome volunteers who want to support our mission.' },
  { q: 'Is the support completely free?', a: 'Yes. All our support services — emotional counseling, caregiver mentorship, community groups, and resources — are completely free of cost.' },
  { q: 'How quickly will someone reach out to me?', a: 'Our team responds to all registrations and messages within 24–48 hours. For urgent support, please call us directly at +91 98100 00000.' },
  { q: 'What kind of support do caregivers receive?', a: 'We offer dedicated caregiver support groups, one-on-one mentorship from experienced caregivers, practical guidance on managing care routines, and emotional wellness check-ins.' },
  { q: 'Can I volunteer if I have no medical background?', a: 'Absolutely. Many of our volunteers are not medical professionals. We need people for awareness campaigns, event support, administrative help, and just being a compassionate presence for families.' },
  { q: 'Do you operate across all cities in India?', a: 'We currently have an active presence in 18 cities, but we support families remotely across India. If your city isn\'t listed, register anyway and we\'ll connect you to the nearest available resources.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ padding: '80px 24px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--charcoal)' }}>Questions we hear often</h2>
          <p style={{ color: 'var(--muted)', marginTop: 10, fontSize: 14 }}>Still have questions? Use our chat assistant below or write to us directly.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: 'var(--white)', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'box-shadow 0.2s',
              boxShadow: open === i ? 'var(--shadow)' : 'none',
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', textAlign: 'left', padding: '18px 20px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'transparent', fontSize: 14, fontWeight: 500, color: 'var(--charcoal)',
                gap: 12,
              }}>
                <span>{faq.q}</span>
                <span style={{
                  color: 'var(--green)', fontSize: 18, transition: 'transform 0.25s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 20px 18px', color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
