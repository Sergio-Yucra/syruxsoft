'use client'

import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Nav() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setVisible(y < lastY.current || y < 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="main-nav"
      aria-label="Navegación principal"
      style={{
        position: 'fixed',
        top: visible ? 'var(--space-6)' : '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        transition: 'top var(--duration-mid) var(--ease-out)',
        width: 'calc(100% - var(--space-8))',
        maxWidth: 760,
      }}
    >
      <div
        className="glass"
        style={{
          borderRadius: 999,
          padding: 'var(--space-3) var(--space-5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          boxShadow: scrolled
            ? '0 8px 32px oklch(0% 0 0 / 0.3)'
            : '0 2px 12px oklch(0% 0 0 / 0.15)',
          transition: 'box-shadow var(--duration-mid) var(--ease-out)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          id="nav-logo"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--color-ink)',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          Syrux<span style={{ color: 'var(--color-accent)' }}>Soft</span>
        </a>

        {/* Links — hidden on mobile */}
        <ul
          style={{
            display: 'flex',
            gap: 'var(--space-6)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="nav-links"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-ink-2)',
                  transition: 'color var(--duration-fast) var(--ease-out)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-ink)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-ink-2)')
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA + theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <a
            href="#contacto"
            id="nav-cta"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-paper)',
              background: 'var(--color-accent)',
              padding: 'var(--space-2) var(--space-5)',
              borderRadius: 999,
              whiteSpace: 'nowrap',
              transition: 'opacity var(--duration-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Hablemos
          </a>
          <ThemeToggle />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
