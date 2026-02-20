import { useState, useEffect } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { pacienteService } from '../../services/api'

export default function Pacientes() {
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    pacienteService.getAll()
      .then(res => setPacientes(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout title="Gestión de Pacientes">
      <div className="p-8 space-y-6">
        <div className="flex justify-end">
          <Button variant="primary" icon="add">Nuevo Paciente</Button>
        </div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#4c739a]">Cargando pacientes...</p>
            </div>
          ) : (
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e7edf3]">
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">Nombre</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">DNI</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">Dirección</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">Estado</th>
                      <th className="text-right py-3 px-4 text-sm font-bold text-[#4c739a]">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pacientes.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-8 text-[#4c739a]">
                          No hay pacientes registrados. Haz clic en "Nuevo Paciente" para agregar uno.
                        </td>
                      </tr>
                    ) : (
                      pacientes.map((paciente) => (
                        <tr key={paciente.id} className="border-b border-[#e7edf3] hover:bg-[#f6f7f8]">
                          <td className="py-3 px-4 text-sm font-semibold">{paciente.nombre}</td>
                          <td className="py-3 px-4 text-sm text-[#4c739a]">{paciente.dni}</td>
                          <td className="py-3 px-4 text-sm text-[#4c739a]">{paciente.direccion}</td>
                          <td className="py-3 px-4">
                            <Badge variant="success">Activo</Badge>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex gap-2 justify-end">
                              <button className="text-[#2b8cee] hover:underline text-sm font-medium">
                                Ver
                              </button>
                              <button className="text-[#2b8cee] hover:underline text-sm font-medium">
                                Editar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
      </div>
    </AdminLayout>
  )
}
