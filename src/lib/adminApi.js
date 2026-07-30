const API_BASE = import.meta.env.VITE_API_URL ?? '/api/v1'


async function request(path, { method = 'GET', token, body, signal } = {}) {
  const headers = { Accept: 'application/json' }
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  })

  // DELETE returns 204 with no body — nothing to parse.
  if (response.status === 204) return null

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const error = new Error(data?.error ?? `Request to ${path} failed with ${response.status}`)
    error.status = response.status
    error.details = data?.details
    throw error
  }

  return data
}

// ---- Auth -------------------------------------------------------------

export const login = (email, password) =>
  request('/auth/login', { method: 'POST', body: { email, password } })

export const fetchMe = (token) => request('/auth/me', { token })

// ---- Admin case studies -------------------------------------------------

export const fetchAdminCaseStudies = (token) =>
  request('/admin/case-studies', { token })

export const fetchAdminCaseStudy = (token, id) =>
  request(`/admin/case-studies/${id}`, { token })

export const createCaseStudy = (token, data) =>
  request('/admin/case-studies', { method: 'POST', token, body: data })

export const updateCaseStudy = (token, id, data) =>
  request(`/admin/case-studies/${id}`, { method: 'PUT', token, body: data })

export const deleteCaseStudy = (token, id) =>
  request(`/admin/case-studies/${id}`, { method: 'DELETE', token })