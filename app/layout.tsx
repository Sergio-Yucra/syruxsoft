import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Syrux Soft — Desarrollo de Software a Medida',
  description: 'Transformamos tus ideas en productos digitales de alto impacto. Desarrollo web, software a medida, apps móviles y sistemas empresariales.',
  keywords: ['desarrollo de software', 'software a medida', 'desarrollo web', 'apps móviles', 'sistemas empresariales'],
  authors: [{ name: 'Syrux Soft' }],
  openGraph: {
    title: 'Syrux Soft — Desarrollo de Software a Medida',
    description: 'Transformamos tus ideas en productos digitales de alto impacto.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
