'use client'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-divider)',
        padding: 'var(--space-20) 0 var(--space-12)',
      }}
    >
      <div className="container">
        {/* Statement */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-ink)',
            maxWidth: '22ch',
            lineHeight: 1.1,
            marginBottom: 'var(--space-16)',
          }}
        >
          Software hecho con{' '}
          <span style={{ color: 'var(--color-accent)' }}>intención</span>,
          no solo con código.
        </p>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
            borderTop: '1px solid var(--color-divider)',
            paddingTop: 'var(--space-8)',
          }}
        >
          {/* Brand */}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--color-ink)',
            }}
          >
            Syrux<span style={{ color: 'var(--color-accent)' }}>Soft</span>
          </span>

          {/* Links */}
          <nav aria-label="Links de pie de página">
            <ul
              style={{
                display: 'flex',
                gap: 'var(--space-8)',
                listStyle: 'none',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Servicios', href: '#servicios' },
                { label: 'Proceso', href: '#proceso' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Contacto', href: '#contacto' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-ink-3)',
                      transition: 'color var(--duration-fast) var(--ease-out)',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-ink)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-ink-3)')
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-ink-3)',
              whiteSpace: 'nowrap',
            }}
          >
            © {new Date().getFullYear()} Syrux Soft
          </p>
        </div>
      </div>
    </footer>
  )
}
