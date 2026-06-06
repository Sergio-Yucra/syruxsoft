'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 'web',
    icon: '◈',
    title: 'Desarrollo Web',
    description:
      'Sitios y plataformas web de alto rendimiento. Desde landing pages de conversión hasta apps complejas con autenticación, pagos y dashboards.',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'software',
    icon: '⬡',
    title: 'Software a Medida',
    description:
      'Sistemas empresariales diseñados para tu operación. CRMs, ERPs, paneles de gestión, integraciones de API y automatizaciones de procesos.',
    tags: ['Sistemas', 'API REST', 'Automatización', 'Integraciones'],
  },
  {
    id: 'paginas',
    icon: '◎',
    title: 'Páginas & Apps',
    description:
      'Presencia digital que convierte. Páginas corporativas, e-commerce, portafolios y aplicaciones móviles pensadas para resultados.',
    tags: ['E-commerce', 'SEO', 'Mobile', 'UX/UI'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'var(--space-8)',
        borderRadius: 20,
        border: `1px solid ${hovered ? 'var(--color-accent-dim)' : 'var(--glass-border)'}`,
        background: hovered ? 'var(--color-accent-glow)' : 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        transition: 'all var(--duration-mid) var(--ease-out)',
        transform: visible
          ? `translateY(0)`
          : `translateY(32px)`,
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        cursor: 'default',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          border: '1px solid var(--glass-border)',
          background: 'var(--color-paper-3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          color: 'var(--color-accent)',
          marginBottom: 'var(--space-6)',
          transition: 'background var(--duration-mid) var(--ease-out)',
        }}
      >
        {service.icon}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'var(--color-ink)',
          marginBottom: 'var(--space-3)',
          letterSpacing: '-0.02em',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: '0.9375rem',
          color: 'var(--color-ink-2)',
          lineHeight: 1.65,
          marginBottom: 'var(--space-6)',
        }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'var(--color-accent)',
              background: 'var(--color-accent-glow)',
              border: '1px solid var(--color-accent-dim)',
              padding: '3px 10px',
              borderRadius: 999,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Section header */}
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
            01 / Servicios
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
              maxWidth: '20ch',
            }}
          >
            Soluciones digitales a la medida de tu negocio
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
