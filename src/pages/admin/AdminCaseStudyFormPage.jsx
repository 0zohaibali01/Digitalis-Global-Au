import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'

import { useAuth } from '../../context/AuthContext'
import {
  fetchAdminCaseStudy,
  createCaseStudy,
  updateCaseStudy,
} from '../../lib/adminApi'

const emptyForm = {
  slug: '',
  client: '',
  industry: '',
  metric: '',
  roi: '',
  summary: '',
  headline: '',
  challenge: '',
  approach: [''],
  results: [{ value: '', label: '' }],
  services: [''],
  sortOrder: 0,
  isPublished: true,
}

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export default function AdminCaseStudyFormPage() {
  const { token } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const [form, setForm] = useState(emptyForm)
  const [slugTouched, setSlugTouched] = useState(false)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isEditing) return

    fetchAdminCaseStudy(token, id)
      .then((data) => {
        setForm({
          ...data,
          roi: data.roi ?? '',
          headline: data.headline ?? '',
          challenge: data.challenge ?? '',
          approach: data.approach.length ? data.approach : [''],
          results: data.results.length ? data.results : [{ value: '', label: '' }],
          services: data.services.length ? data.services : [''],
        })
        setSlugTouched(true)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id, isEditing, token])

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleClientChange = (value) => {
    setForm((prev) => ({
      ...prev,
      client: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }))
  }

  // ---- Approach (string list) --------------------------------------

  const updateApproach = (index, value) => {
    const next = [...form.approach]
    next[index] = value
    updateField('approach', next)
  }

  const addApproach = () => updateField('approach', [...form.approach, ''])

  const removeApproach = (index) =>
    updateField('approach', form.approach.filter((_, i) => i !== index))

  // ---- Services (string list) ----------------------------------------

  const updateService = (index, value) => {
    const next = [...form.services]
    next[index] = value
    updateField('services', next)
  }

  const addService = () => updateField('services', [...form.services, ''])

  const removeService = (index) =>
    updateField('services', form.services.filter((_, i) => i !== index))

  // ---- Results (value/label pair list) -------------------------------

  const updateResult = (index, key, value) => {
    const next = [...form.results]
    next[index] = { ...next[index], [key]: value }
    updateField('results', next)
  }

  const addResult = () =>
    updateField('results', [...form.results, { value: '', label: '' }])

  const removeResult = (index) =>
    updateField('results', form.results.filter((_, i) => i !== index))

  // ---- Submit ---------------------------------------------------------

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setSaving(true)

    const payload = {
      ...form,
      roi: form.roi || null,
      headline: form.headline || null,
      challenge: form.challenge || null,
      approach: form.approach.map((s) => s.trim()).filter(Boolean),
      services: form.services.map((s) => s.trim()).filter(Boolean),
      results: form.results
        .map((r) => ({ value: r.value.trim(), label: r.label.trim() }))
        .filter((r) => r.value && r.label),
      sortOrder: Number(form.sortOrder) || 0,
    }

    try {
      if (isEditing) {
        await updateCaseStudy(token, id, payload)
      } else {
        await createCaseStudy(token, payload)
      }
      navigate('/admin')
    } catch (err) {
      setError(err.status === 409 ? err.message : err.message || 'Failed to save.')
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-dark text-slate-400">
        Loading…
      </div>
    )
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30'
  const labelClass = 'block text-sm font-medium text-slate-300'

  return (
    <div className="min-h-screen bg-brand-dark px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to dashboard
        </Link>

        <h1 className="mt-4 font-display text-2xl font-bold">
          {isEditing ? 'Edit case study' : 'New case study'}
        </h1>

        {error && (
          <p className="mt-6 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          {/* Basics */}
          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div>
              <label className={labelClass}>Client name</label>
              <input
                required
                value={form.client}
                onChange={(e) => handleClientChange(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Slug</label>
              <input
                required
                value={form.slug}
                onChange={(e) => {
                  setSlugTouched(true)
                  updateField('slug', e.target.value)
                }}
                className={inputClass}
                placeholder="my-client-name"
              />
              <p className="mt-1 text-xs text-slate-500">
                Lowercase letters, numbers and hyphens only. Used in the URL.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Industry</label>
                <input
                  required
                  value={form.industry}
                  onChange={(e) => updateField('industry', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Metric (card badge)</label>
                <input
                  required
                  value={form.metric}
                  onChange={(e) => updateField('metric', e.target.value)}
                  className={inputClass}
                  placeholder="7x+ ROAS"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>ROI (optional)</label>
                <input
                  value={form.roi}
                  onChange={(e) => updateField('roi', e.target.value)}
                  className={inputClass}
                  placeholder="185%"
                />
              </div>
              <div>
                <label className={labelClass}>Sort order</label>
                <input
                  type="number"
                  value={form.sortOrder}
                  onChange={(e) => updateField('sortOrder', e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-slate-500">
                  Lowest number shows first. 0 gets the featured dark card.
                </p>
              </div>
            </div>

            <div>
              <label className={labelClass}>Headline (optional)</label>
              <input
                value={form.headline}
                onChange={(e) => updateField('headline', e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Summary</label>
              <textarea
                required
                rows={3}
                value={form.summary}
                onChange={(e) => updateField('summary', e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Challenge (optional)</label>
              <textarea
                rows={3}
                value={form.challenge}
                onChange={(e) => updateField('challenge', e.target.value)}
                className={inputClass}
              />
            </div>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.isPublished}
                onChange={(e) => updateField('isPublished', e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-white/5"
              />
              <span className="text-sm text-slate-300">Published (visible on the live site)</span>
            </label>
          </div>

          {/* Approach */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="font-display text-lg font-bold">Approach steps</h2>
            <div className="mt-4 space-y-3">
              {form.approach.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => updateApproach(index, e.target.value)}
                    className={inputClass}
                    placeholder={'Step ' + (index + 1)}
                  />
                  <button
                    type="button"
                    onClick={() => removeApproach(index)}
                    disabled={form.approach.length === 1}
                    className="mt-2 shrink-0 rounded-lg p-2.5 text-slate-400 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-30"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addApproach}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <Plus className="h-4 w-4" /> Add step
            </button>
          </div>

          {/* Results */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="font-display text-lg font-bold">Results</h2>
            <p className="mt-1 text-xs text-slate-500">
              Shown as big number + label, e.g. "7x+" / "ROAS on paid media".
            </p>
            <div className="mt-4 space-y-3">
              {form.results.map((result, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    value={result.value}
                    onChange={(e) => updateResult(index, 'value', e.target.value)}
                    className={inputClass}
                    placeholder="Value (e.g. 7x+)"
                  />
                  <input
                    value={result.label}
                    onChange={(e) => updateResult(index, 'label', e.target.value)}
                    className={inputClass}
                    placeholder="Label (e.g. ROAS on paid media)"
                  />
                  <button
                    type="button"
                    onClick={() => removeResult(index)}
                    disabled={form.results.length === 1}
                    className="mt-2 shrink-0 rounded-lg p-2.5 text-slate-400 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-30"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addResult}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <Plus className="h-4 w-4" /> Add result
            </button>
          </div>

          {/* Services */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="font-display text-lg font-bold">Services (tags)</h2>
            <div className="mt-4 space-y-3">
              {form.services.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => updateService(index, e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Shopify development"
                  />
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    disabled={form.services.length === 1}
                    className="mt-2 shrink-0 rounded-lg p-2.5 text-slate-400 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-30"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addService}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <Plus className="h-4 w-4" /> Add service
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? 'Saving…' : isEditing ? 'Save changes' : 'Create case study'}
            </button>
            <Link to="/admin" className="text-sm text-slate-400 hover:text-white">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}