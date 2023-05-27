export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* include shared UI here... header or sidebar */}
      <nav></nav>
      {children}
    </section>
  )
}
