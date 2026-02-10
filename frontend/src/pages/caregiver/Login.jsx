import { Link } from 'react-router-dom'
import LoginForm from '../../components/auth/LoginForm'
import Logo from '../../components/common/Logo'

export default function CaregiverLogin() {
  return (
    <div className="min-h-screen bg-[#f6f7f8]">
      <header className="flex items-center justify-between border-b border-[#e7edf3] bg-white px-6 lg:px-40 py-3">
        <Link to="/" className="flex items-center gap-4 text-[#0d141b]">
          <div className="text-[#2b8cee]">
            <Logo />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">CareConnect</h2>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-[#0d141b] tracking-light text-[32px] md:text-[40px] font-bold leading-tight pb-3">
              Portal Profesional de Acompañantes
            </h1>
            <p className="text-[#4c739a] text-lg font-normal leading-relaxed pb-6">
              Gestiona tus turnos, completa reportes de pacientes y coordina tu agenda desde un solo lugar.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-[#0d141b]">
                <span className="material-symbols-outlined text-[#2b8cee]">schedule</span>
                <span className="text-base font-medium">Gestión de Turnos en Tiempo Real</span>
              </div>
              <div className="flex items-center gap-3 text-[#0d141b]">
                <span className="material-symbols-outlined text-[#2b8cee]">description</span>
                <span className="text-base font-medium">Reportes Digitales Simplificados</span>
              </div>
              <div className="flex items-center gap-3 text-[#0d141b]">
                <span className="material-symbols-outlined text-[#2b8cee]">payments</span>
                <span className="text-base font-medium">Seguimiento de Pagos</span>
              </div>
            </div>
          </div>

          <LoginForm role="cuidador" />
        </div>
      </main>
    </div>
  )
}
