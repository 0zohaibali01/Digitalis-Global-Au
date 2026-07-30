import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_API_URL ?? '/api/v1'

async function request(path, { signal } = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    signal,
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    const error = new Error(`Request to ${path} failed with ${response.status}`)
    error.status = response.status
    throw error
  }

  return response.json()
}

const isAbort = (error) => error?.name === 'AbortError'

export function useCaseStudies() {
  const [state, setState] = useState({ caseStudies: [], loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()
    let mounted = true

    request('/case-studies', { signal: controller.signal })
      .then((data) => mounted && setState({ caseStudies: data, loading: false, error: null }))
      .catch((error) => {
        if (mounted && !isAbort(error)) setState({ caseStudies: [], loading: false, error })
      })

    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  return state
}

export function useCaseStudy(slug) {
  const [state, setState] = useState({ caseStudy: null, loading: true, notFound: false, error: null })

  useEffect(() => {
    const controller = new AbortController()
    let mounted = true
    setState({ caseStudy: null, loading: true, notFound: false, error: null })

    request(`/case-studies/${encodeURIComponent(slug)}`, { signal: controller.signal })
      .then((data) => mounted && setState({ caseStudy: data, loading: false, notFound: false, error: null }))
      .catch((error) => {
        if (!mounted || isAbort(error)) return
        setState({
          caseStudy: null,
          loading: false,
          notFound: error.status === 404,
          error: error.status === 404 ? null : error,
        })
      })

    return () => {
      mounted = false
      controller.abort()
    }
  }, [slug])

  return state
}