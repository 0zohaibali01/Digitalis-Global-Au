export default function Preheading({ children, className = "", textClassName = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Light Blue Dot/Square Indicator */}
      <span className="h-2 w-2 rounded-sm bg-cyan-400" />
      
      {/* Preheading Text */}
      <span className={`text-sm font-semibold uppercase tracking-[0.25em] text-brand ${className} ${textClassName}`}>
        {children}
      </span>
    </div>
  )
}
