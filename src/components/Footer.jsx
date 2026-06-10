export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'rgba(255,255,255,0.7)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 20 }}>🌿</span>
          <span style={{ fontFamily: 'Lora, serif', color: 'white', fontWeight: 600, fontSize: 16 }}>Jarurat Care</span>
        </div>
        <p style={{ fontSize: 13 }}>Building India's largest cancer support community.</p>
        <p style={{ fontSize: 12 }}>© 2026 Jarurat Care. Made with 💚</p>
      </div>
    </footer>
  )
}
