import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Register', 'Contact', 'FAQ']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,249,246,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>🌿</span>
          <span style={{ fontFamily: 'Lora, serif', fontWeight: 600, fontSize: 18, color: 'var(--green)' }}>Jarurat Care</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ color: 'var(--muted)', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--green)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          ))}
          <a href="#register" style={{
            background: 'var(--green)', color: 'white', padding: '8px 20px',
            borderRadius: 8, fontSize: 14, fontWeight: 500,
          }}>Join Us</a>
        </div>
      </div>
    </nav>
  )
}
