export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* shared UI goes here */}
      {children}
    </section>
  )
}
