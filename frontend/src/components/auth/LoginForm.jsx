import { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'

export default function LoginForm({ role }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData, role)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-[#e7edf3] w-full max-w-md mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#0d141b] mb-2">Iniciar Sesión</h2>
        <p className="text-[#4c739a] text-sm">Accede a tu panel de {role}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email o Usuario"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-[#0d141b] text-sm font-semibold">Contraseña</label>
            <a href="#" className="text-[#2b8cee] text-xs font-bold hover:underline">
              ¿Olvidaste?
            </a>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center gap-2 py-2">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="rounded border-[#cfdbe7] text-[#2b8cee] focus:ring-[#2b8cee] cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm text-[#4c739a] cursor-pointer">
            Mantenerme conectado
          </label>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full" icon="login">
          Ingresar
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-[#e7edf3]">
        <p className="text-center text-sm text-[#4c739a] mb-4">¿Nuevo en CuidadorApp?</p>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-[#cfdbe7] hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-[#2b8cee] mb-1">person_add</span>
            <span className="text-xs font-bold text-[#0d141b] uppercase tracking-wider">Registrarse</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-[#cfdbe7] hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-[#2b8cee] mb-1">description</span>
            <span className="text-xs font-bold text-[#0d141b] uppercase tracking-wider">Ver Reportes</span>
          </button>
        </div>
      </div>
    </div>
  )
}
