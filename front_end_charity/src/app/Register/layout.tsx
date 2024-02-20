import React from 'react'

export default function AdminLayout({
    children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <section>
    {children}
  </section>
}
