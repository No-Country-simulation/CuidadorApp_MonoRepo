import FamilyLayout from '../../components/layouts/FamilyLayout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'

export default function FamilyDashboard() {
  return (
    <FamilyLayout title="Dashboard Familiar">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <span className="material-symbols-outlined text-[#2b8cee]">calendar_today</span>
                </div>
              </div>
              <p className="text-[#4c739a] text-sm font-medium">Próxima Visita</p>
              <h3 className="text-xl font-bold mt-1">Hoy, 14:00</h3>
              <p className="text-xs text-[#4c739a] mt-2">Sarah Jenkins</p>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <span className="material-symbols-outlined text-green-600">favorite</span>
                </div>
              </div>
              <p className="text-[#4c739a] text-sm font-medium">Estado General</p>
              <h3 className="text-xl font-bold mt-1 text-green-600">Estable</h3>
              <p className="text-xs text-[#4c739a] mt-2">Última actualización hace 2h</p>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <span className="material-symbols-outlined text-purple-600">description</span>
                </div>
              </div>
              <p className="text-[#4c739a] text-sm font-medium">Reportes Esta Semana</p>
              <h3 className="text-xl font-bold mt-1">12</h3>
              <p className="text-xs text-[#4c739a] mt-2">Ver todos los reportes</p>
            </Card>
          </div>

          <Card>
            <h3 className="text-lg font-bold mb-4">Actividad Reciente</h3>
            <div className="space-y-4">
              {[
                { text: 'Reporte de cuidado completado', time: 'Hace 2 horas', icon: 'description' },
                { text: 'Medicación administrada', time: 'Hace 4 horas', icon: 'medication' },
                { text: 'Visita de Sarah Jenkins completada', time: 'Hace 6 horas', icon: 'check_circle' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#f6f7f8]">
                  <div className="w-10 h-10 rounded-full bg-[#2b8cee]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#2b8cee]">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{activity.text}</p>
                    <p className="text-xs text-[#4c739a]">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
    </FamilyLayout>
  )
}
