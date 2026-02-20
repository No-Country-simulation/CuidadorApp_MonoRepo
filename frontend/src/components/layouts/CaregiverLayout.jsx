import Sidebar from '../common/Sidebar'

export default function CaregiverLayout({ children, title }) {
  const menuItems = [
    { icon: 'dashboard', label: 'Inicio', path: '/caregiver/dashboard' },
    { icon: 'schedule', label: 'Mis Turnos', path: '/caregiver/turnos' },
    { icon: 'groups', label: 'Mis Pacientes', path: '/caregiver/pacientes' },
    { icon: 'description', label: 'Reportes', path: '/caregiver/reportes' },
    { icon: 'payments', label: 'Pagos', path: '/caregiver/pagos' },
    { icon: 'account_circle', label: 'Mi Perfil', path: '/caregiver/perfil' }
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar title="Portal" subtitle="Cuidadores" menuItems={menuItems} />
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
