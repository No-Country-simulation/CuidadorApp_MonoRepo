import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api'
})

const createService = (resource) => ({
  getAll: () => api.get(`/${resource}`),
  getById: (id) => api.get(`/${resource}/${id}`),
  create: (data) => api.post(`/${resource}`, data),
  update: (id, data) => api.put(`/${resource}/${id}`, data),
  delete: (id) => api.delete(`/${resource}/${id}`)
})

export const cuidadorService = createService('cuidadores')
export const pacienteService = createService('pacientes')
export const guardiaService = createService('guardias')
export const pagoService = createService('pagos')

export default api
