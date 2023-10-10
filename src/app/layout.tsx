import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Next's WooCommerce`,
  description: 'Made with NextJs + Tailwind'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
