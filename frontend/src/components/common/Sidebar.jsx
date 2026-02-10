import { Link, useLocation } from 'react-router-dom'

export default function Sidebar({ title, subtitle, menuItems = [] }) {
  const location = useLocation()
  
  return (
    <aside className="w-64 border-r border-[#e7edf3] bg-white flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-[#2b8cee] rounded-lg p-2 text-white">
          <span className="material-symbols-outlined block">health_and_safety</span>
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">{title}</h1>
          <p className="text-xs text-[#4c739a]">{subtitle}</p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive 
                  ? 'bg-[#2b8cee]/10 text-[#2b8cee]' 
                  : 'text-[#4c739a] hover:bg-[#e7edf3]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t border-[#e7edf3]">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">settings</span>
          <span className="text-sm">Settings</span>
        </Link>
      </div>
    </aside>
  )
}
