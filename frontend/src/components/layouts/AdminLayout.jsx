import Sidebar from '../common/Sidebar'

export default function AdminLayout({ children, title }) {
  const menuItems = [
    { icon: 'dashboard', label: 'Home', path: '/admin/dashboard' },
    { icon: 'groups', label: 'Pacientes', path: '/admin/pacientes' },
    { icon: 'medical_services', label: 'Cuidadores', path: '/admin/cuidadores' },
    { icon: 'schedule', label: 'Turnos', path: '/admin/guardias' },
    { icon: 'description', label: 'Reportes', path: '/admin/reportes' },
    { icon: 'payments', label: 'Pagos', path: '/admin/pagos' }
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar title="AdminPanel" subtitle="Care Management" menuItems={menuItems} />
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#f6f7f8]">
        {title && (
          <header className="h-16 border-b border-[#e7edf3] bg-white flex items-center justify-between px-8 sticky top-0 z-10">
            <h2 className="text-xl font-bold tracking-tight">{title}</h2>
          </header>
        )}
        {children}
      </main>
    </div>
  )
}
