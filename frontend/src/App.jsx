import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import FamilyLogin from './pages/family/Login'
import FamilyDashboard from './pages/family/Dashboard'
import CaregiverLogin from './pages/caregiver/Login'
import CaregiverDashboard from './pages/caregiver/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'
import Pacientes from './pages/admin/Pacientes'
import Cuidadores from './pages/admin/Cuidadores'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/family/login" element={<FamilyLogin />} />
      <Route path="/family/dashboard" element={<FamilyDashboard />} />
      
      <Route path="/caregiver/login" element={<CaregiverLogin />} />
      <Route path="/caregiver/dashboard" element={<CaregiverDashboard />} />
      
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/pacientes" element={<Pacientes />} />
      <Route path="/admin/cuidadores" element={<Cuidadores />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

