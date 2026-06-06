'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Descubrimiento',
    desc: 'Entendemos tu negocio, tus usuarios y el problema real a resolver. Definimos alcance, tiempos y entregables.',
    icon: '◉',
  },
  {
    num: '02',
    title: 'Diseño',
    desc: 'Prototipamos la solución antes de escribir código. Wireframes, flujos y diseño de interfaz validado contigo.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Desarrollo',
    desc: 'Construimos iterativamente con revisiones periódicas. Código limpio, escalable y con pruebas.',
    icon: '⬡',
  },
  {
    num: '04',
    title: 'Entrega & Soporte',
    desc: 'Desplegamos en producción y te acompañamos. Documentación completa y soporte post-lanzamiento.',
    icon: '◎',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="proceso"
      className="section"
      style={{ background: 'var(--color-paper-2)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-4)',
            }}
          >
            02 / Proceso
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
              maxWidth: '22ch',
            }}
          >
            Cómo trabajamos contigo
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'var(--space-1)',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: 'var(--space-8) var(--space-6)',
                borderLeft: i === 0 ? 'none' : '1px solid var(--color-divider)',
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                opacity: visible ? 1 : 0,
                transition: `all var(--duration-slow) var(--ease-out)`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: '2rem',
                  color: 'var(--color-ink-3)',
                  marginBottom: 'var(--space-5)',
                  lineHeight: 1,
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-ink-2)',
                  lineHeight: 1.65,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: remove left border on first col */}
      <style>{`
        @media (max-width: 600px) {
          #proceso [style*="borderLeft"] { border-left: none !important; border-top: 1px solid var(--color-divider); }
        }
      `}</style>
    </section>
  )
}
