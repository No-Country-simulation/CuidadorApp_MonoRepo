import { useState, useEffect } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { cuidadorService } from '../../services/api'

export default function Cuidadores() {
  const [cuidadores, setCuidadores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    cuidadorService.getAll()
      .then(res => setCuidadores(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout title="Gestión de Cuidadores">
      <div className="p-8 space-y-6">
        <div className="flex justify-end">
          <Button variant="primary" icon="add">Nuevo Cuidador</Button>
        </div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#4c739a]">Cargando cuidadores...</p>
            </div>
          ) : (
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e7edf3]">
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">Nombre</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">DNI</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">Teléfono</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-[#4c739a]">Estado</th>
                      <th className="text-right py-3 px-4 text-sm font-bold text-[#4c739a]">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cuidadores.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-8 text-[#4c739a]">
                          No hay cuidadores registrados. Haz clic en "Nuevo Cuidador" para agregar uno.
                        </td>
                      </tr>
                    ) : (
                      cuidadores.map((cuidador) => (
                        <tr key={cuidador.id} className="border-b border-[#e7edf3] hover:bg-[#f6f7f8]">
                          <td className="py-3 px-4 text-sm font-semibold">{cuidador.nombre}</td>
                          <td className="py-3 px-4 text-sm text-[#4c739a]">{cuidador.dni}</td>
                          <td className="py-3 px-4 text-sm text-[#4c739a]">{cuidador.telefono}</td>
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
