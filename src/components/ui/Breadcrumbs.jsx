import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-sm text-slate-300 md:text-base">
      <Link to="/au" className="transition hover:text-white">Home</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-slate-400" />
          {item.to ? (
            <Link to={item.to} className="transition hover:text-white">{item.label}</Link>
          ) : (
            <span className="text-cyan-200">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
