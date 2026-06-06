'use client'

import { useState, useEffect, useRef } from 'react'

// Placeholder projects — replace with real ones when ready
const projects = [
  {
    id: 'p1',
    title: 'Panel de Gestión Empresarial',
    category: 'Software a Medida',
    description: 'Sistema integral de gestión de inventario, ventas y reportes para empresa distribuidora.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    accent: 'var(--color-accent)',
  },
  {
    id: 'p2',
    title: 'Plataforma E-commerce',
    category: 'Desarrollo Web',
    description: 'Tienda en línea con catálogo dinámico, carrito y pasarela de pagos integrada.',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    accent: 'oklch(72% 0.16 160)',
  },
  {
    id: 'p3',
    title: 'App de Seguimiento de Pedidos',
    category: 'App & Mobile',
    description: 'Aplicación web progresiva para clientes y repartidores con tracking en tiempo real.',
    tags: ['PWA', 'Sockets', 'Maps API'],
    accent: 'oklch(72% 0.18 300)',
  },
  {
    id: 'p4',
    title: 'Sistema de Facturación',
    category: 'Software a Medida',
    description: 'Automatización de facturación electrónica con integración a SAT y generación de reportes.',
    tags: ['Python', 'FastAPI', 'PDF'],
    accent: 'oklch(72% 0.18 50)',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
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
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        border: '1px solid var(--glass-border)',
        background: 'var(--color-paper-2)',
        overflow: 'hidden',
        transition: 'all var(--duration-mid) var(--ease-out)',
        transform: visible
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(28px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        boxShadow: hovered
          ? `0 20px 48px oklch(0% 0 0 / 0.25)`
          : '0 2px 8px oklch(0% 0 0 / 0.1)',
      }}
    >
      {/* Color bar */}
      <div
        style={{
          height: 4,
          background: project.accent,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity var(--duration-mid) var(--ease-out)',
        }}
      />

      <div style={{ padding: 'var(--space-8)' }}>
        {/* Category */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-3)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {project.category}
        </p>

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
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-ink-2)',
            lineHeight: 1.65,
            marginBottom: 'var(--space-6)',
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-ink-3)',
                background: 'var(--color-paper-3)',
                border: '1px solid var(--color-divider)',
                padding: '3px 10px',
                borderRadius: 999,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-16)',
          }}
        >
          <div>
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
              03 / Proyectos
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.03em',
                color: 'var(--color-ink)',
              }}
            >
              Trabajo reciente
            </h2>
          </div>
          <a
            href="#contacto"
            id="portfolio-cta"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'var(--color-accent)',
              borderBottom: '1px solid var(--color-accent-dim)',
              paddingBottom: 2,
              whiteSpace: 'nowrap',
              transition: 'opacity var(--duration-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Hablemos de tu proyecto →
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
