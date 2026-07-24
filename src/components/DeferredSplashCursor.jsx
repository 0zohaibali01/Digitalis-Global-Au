import { lazy, Suspense, useEffect, useState } from 'react'

const SplashCursor = lazy(() => import('../component/SplashCursor'))

export default function DeferredSplashCursor() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined

    const loadEffect = () => setShouldLoad(true)
    const idleCallback = window.requestIdleCallback?.(loadEffect, { timeout: 3000 })
    const timeout = idleCallback ? undefined : window.setTimeout(loadEffect, 1500)

    return () => {
      if (idleCallback) window.cancelIdleCallback?.(idleCallback)
      if (timeout) window.clearTimeout(timeout)
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <Suspense fallback={null}>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#123148"
      />
    </Suspense>
  )
}
