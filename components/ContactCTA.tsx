'use client'

import { useState, useRef } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactCTA() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [state, setState] = useState<FormState>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    // Simulate async — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: 'var(--space-4) var(--space-5)',
    borderRadius: 12,
    border: '1px solid var(--glass-border)',
    background: 'var(--color-paper-3)',
    color: 'var(--color-ink)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out)',
  }

  return (
    <section
      id="contacto"
      className="section"
      style={{ background: 'var(--color-paper-2)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'var(--space-16)',
            alignItems: 'start',
          }}
        >
          {/* Left: copy */}
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
              04 / Contacto
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                letterSpacing: '-0.03em',
                color: 'var(--color-ink)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Cuéntanos tu proyecto
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-ink-2)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-10)',
                maxWidth: '42ch',
              }}
            >
              Sin compromisos. Revisamos tu idea, te damos una opinión honesta
              y un estimado de tiempos y costos en menos de 48 h.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { label: 'Email', value: 'hola@syruxsoft.com' },
                { label: 'WhatsApp', value: '+1 (555) 000-0000' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-3)',
                      minWidth: 72,
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--color-ink-2)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="glass"
            style={{
              borderRadius: 20,
              padding: 'var(--space-8)',
            }}
          >
            {state === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-12) 0',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'var(--color-accent-glow)',
                    border: '1px solid var(--color-accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: 'var(--color-ink)',
                  }}
                >
                  ¡Mensaje recibido!
                </h3>
                <p style={{ color: 'var(--color-ink-2)', fontSize: '0.9rem' }}>
                  Te contactaremos en menos de 48 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <label
                    htmlFor="nombre"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-3)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handle}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-3)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    value={form.email}
                    onChange={handle}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-3)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    Cuéntanos tu proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="¿Qué quieres construir?"
                    value={form.mensaje}
                    onChange={handle}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={state === 'loading'}
                  style={{
                    padding: 'var(--space-4) var(--space-6)',
                    borderRadius: 12,
                    background: state === 'loading' ? 'var(--color-accent-dim)' : 'var(--color-accent)',
                    color: 'var(--color-paper)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: state === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'all var(--duration-fast) var(--ease-out)',
                    border: 'none',
                  }}
                >
                  {state === 'loading' ? 'Enviando…' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
