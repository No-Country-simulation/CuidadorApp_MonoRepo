import CaregiverLayout from '../../components/layouts/CaregiverLayout'
import StatCard from '../../components/common/StatCard'
import Badge from '../../components/common/Badge'

export default function CaregiverDashboard() {
  return (
    <CaregiverLayout title="Mis Turnos">
      <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-4">
            <StatCard
              title="Horas Totales (Semana)"
              value="38.5h"
              icon="timelapse"
              trend="up"
              trendValue="12%"
            />
            <StatCard
              title="Reportes Pendientes"
              value="2"
              icon="pending_actions"
            />
            <StatCard
              title="Pacientes Asignados"
              value="5"
              icon="groups"
            />
          </div>

          <div className="bg-white rounded-xl border border-[#e7edf3] overflow-hidden">
            <div className="p-6 border-b border-[#e7edf3]">
              <h3 className="text-lg font-bold">Turnos Próximos</h3>
            </div>
            <div className="divide-y divide-[#e7edf3]">
              {[
                { patient: 'Ana María González', time: '09:00 - 17:00', date: 'Hoy', status: 'pending' },
                { patient: 'Roberto Fernández', time: '14:00 - 22:00', date: 'Mañana', status: 'confirmed' },
                { patient: 'Carmen López', time: '08:00 - 16:00', date: '15 Feb', status: 'confirmed' }
              ].map((shift, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-[#f6f7f8]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2b8cee]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#2b8cee]">person</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{shift.patient}</p>
                      <p className="text-xs text-[#4c739a]">{shift.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={shift.status === 'pending' ? 'warning' : 'success'}>
                      {shift.status === 'pending' ? 'Pendiente' : 'Confirmado'}
                    </Badge>
                    <span className="text-sm text-[#4c739a] font-medium">{shift.date}</span>
                    <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#2b8cee] text-white text-sm font-bold">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </CaregiverLayout>
  )
}
