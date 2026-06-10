export default function About() {
  const values = [
    { icon: '🤝', title: 'Community First', desc: 'We build human connections before everything else. Every patient deserves a network of people who truly understand.' },
    { icon: '💚', title: 'Caregiver Support', desc: 'Caregivers carry invisible weight. We provide mentorship, resources, and a safe space to share their journey.' },
    { icon: '📣', title: 'Awareness & Prevention', desc: 'Early detection saves lives. We run campaigns focused on cancers that often go unnoticed until it\'s too late.' },
  ]

  return (
    <section id="about" style={{ padding: '80px 24px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>What We Do</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--charcoal)' }}>Built on empathy,<br />powered by community</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {values.map(v => (
            <div key={v.title} style={{
              background: 'var(--cream)', borderRadius: 'var(--radius)',
              padding: '32px 28px', border: '1px solid var(--border)',
            }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--charcoal)', fontFamily: 'Lora, serif' }}>{v.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 14 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
