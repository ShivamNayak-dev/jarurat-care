export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(160deg, #eaf6ee 0%, #faf9f6 60%, #f0f7f2 100%)',
      padding: '100px 24px 60px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--green-pale)', borderRadius: 20,
            padding: '6px 14px', marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-light)', display: 'inline-block' }}></span>
            <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 500, letterSpacing: '0.04em' }}>CANCER CARE COMMUNITY · INDIA</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--charcoal)', marginBottom: 20, fontWeight: 600 }}>
            No family should face<br />
            <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>cancer alone.</em>
          </h1>

          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
            Jarurat Care builds India's largest cancer support network — connecting patients, caregivers, and volunteers to share strength, resources, and hope.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#register" style={{
              background: 'var(--green)', color: 'white',
              padding: '14px 28px', borderRadius: 10,
              fontWeight: 500, fontSize: 15,
              boxShadow: '0 4px 20px rgba(45,106,79,0.25)',
              transition: 'transform 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Register for Support
            </a>
            <a href="#faq" style={{
              border: '1.5px solid var(--border)', color: 'var(--charcoal)',
              padding: '14px 28px', borderRadius: 10,
              fontWeight: 500, fontSize: 15,
              display: 'inline-block',
            }}>
              Have Questions?
            </a>
          </div>

          <div style={{ display: 'flex', gap: 36, marginTop: 52 }}>
            {[['5000+', 'Families Supported'], ['120+', 'Active Volunteers'], ['18', 'Cities Reached']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 24, fontFamily: 'Lora, serif', fontWeight: 600, color: 'var(--green)' }}>{num}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
