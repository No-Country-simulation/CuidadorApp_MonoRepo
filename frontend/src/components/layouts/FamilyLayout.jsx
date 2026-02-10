import Sidebar from '../common/Sidebar'

export default function FamilyLayout({ children, title }) {
  const menuItems = [
    { icon: 'dashboard', label: 'Inicio', path: '/family/dashboard' },
    { icon: 'person', label: 'Mi Familiar', path: '/family/paciente' },
    { icon: 'medical_services', label: 'Cuidadores', path: '/family/cuidadores' },
    { icon: 'schedule', label: 'Horarios', path: '/family/horarios' },
    { icon: 'description', label: 'Reportes', path: '/family/reportes' },
    { icon: 'payments', label: 'Pagos', path: '/family/pagos' }
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar title="Portal" subtitle="Familias" menuItems={menuItems} />
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
