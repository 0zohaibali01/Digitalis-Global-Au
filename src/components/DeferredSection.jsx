import { Suspense, useEffect, useRef, useState } from 'react'

export default function DeferredSection({ children, minHeight = 420 }) {
  const ref = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true)
          observer.disconnect()
        }
      },
      { rootMargin: '900px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={isReady ? undefined : { minHeight }}>
      {isReady ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  )
}
