'use client'

import { useEffect, useRef } from 'react'

const marqueeItems = [
  'Desarrollo Web',
  'Software a Medida',
  'Sistemas Empresariales',
  'Apps & Plataformas',
  'Automatización',
  'Consultoría Digital',
]

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  // CSS animation — no JS needed for the scroll
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-16)',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'var(--color-accent-glow)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 999,
            border: '1px solid var(--color-accent-dim)',
            background: 'var(--color-accent-glow)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--color-accent)',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-accent)',
              letterSpacing: '0.08em',
              fontWeight: 500,
            }}
          >
            Disponibles para nuevos proyectos
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            color: 'var(--color-ink)',
            maxWidth: '14ch',
            marginBottom: 'var(--space-8)',
          }}
        >
          Construimos el software que{' '}
          <span
            style={{
              color: 'var(--color-accent)',
              position: 'relative',
              display: 'inline-block',
            }}
          >
            mueve
          </span>{' '}
          tu empresa
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--color-ink-2)',
            maxWidth: '52ch',
            lineHeight: 1.6,
            marginBottom: 'var(--space-10)',
            fontWeight: 400,
          }}
        >
          De la idea al producto funcional. Desarrollamos soluciones web, apps y sistemas a medida
          que resuelven problemas reales con tecnología de alto nivel.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a
            href="#contacto"
            id="hero-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-4) var(--space-8)',
              borderRadius: 999,
              background: 'var(--color-accent)',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '0.88'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }}
          >
            Iniciar proyecto →
          </a>
          <a
            href="#servicios"
            id="hero-cta-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-4) var(--space-8)',
              borderRadius: 999,
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              WebkitBackdropFilter: 'blur(var(--glass-blur))',
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '1rem',
              transition: 'border-color var(--duration-fast) var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)')
            }
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{
          marginTop: 'var(--space-20)',
          borderTop: '1px solid var(--color-divider)',
          borderBottom: '1px solid var(--color-divider)',
          padding: 'var(--space-4) 0',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          ref={marqueeRef}
          style={{
            display: 'flex',
            gap: 'var(--space-12)',
            animation: 'marquee 24s linear infinite',
            width: 'max-content',
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--color-ink-3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
              <span
                style={{
                  marginLeft: 'var(--space-12)',
                  color: 'var(--color-accent)',
                  opacity: 0.5,
                }}
              >
                /
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
