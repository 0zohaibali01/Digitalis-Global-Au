import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Pencil, Trash2, LogOut, ExternalLink } from 'lucide-react'

import { useAuth } from '../../context/AuthContext'
import {
  fetchAdminCaseStudies,
  deleteCaseStudy,
  updateCaseStudy,
} from '../../lib/adminApi'

export default function AdminDashboardPage() {
  const { token, user, logout } = useAuth()
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busyId, setBusyId] = useState(null)

  const loadData = () => {
    setLoading(true)
    fetchAdminCaseStudies(token)
      .then((data) => {
        setCaseStudies(data)
        setError(null)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  useEffect(loadData, [token])

  const handleTogglePublish = async (study) => {
    setBusyId(study.id)
    try {
      await updateCaseStudy(token, study.id, { isPublished: !study.isPublished })
      loadData()
    } catch (err) {
      alert(`Failed to update: ${err.message}`)
    } finally {
      setBusyId(null)
    }
  }

  const handleDelete = async (study) => {
    if (!window.confirm(`Delete "${study.client}"? This cannot be undone.`)) return

    setBusyId(study.id)
    try {
      await deleteCaseStudy(token, study.id)
      loadData()
    } catch (err) {
      alert(`Failed to delete: ${err.message}`)
      setBusyId(null)
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="font-display text-2xl font-bold">Case studies</h1>
            <p className="mt-1 text-sm text-slate-400">Signed in as {user?.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/admin/case-studies/new"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-brand-dark transition hover:bg-cyan-300"
            >
              <Plus className="h-4 w-4" /> New case study
            </Link>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        {loading && <p className="mt-8 text-slate-400">Loading…</p>}

        {error && (
          <p className="mt-8 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-5 py-3">Client</th>
                  <th className="px-5 py-3">Slug</th>
                  <th className="px-5 py-3">Order</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {caseStudies.map((study) => (
                  <tr key={study.id} className="hover:bg-white/[0.02]">
                    <td className="px-5 py-4 font-semibold">{study.client}</td>
                    <td className="px-5 py-4 text-slate-400">{study.slug}</td>
                    <td className="px-5 py-4 text-slate-400">{study.sortOrder}</td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleTogglePublish(study)}
                        disabled={busyId === study.id}
                        className={
                          study.isPublished
                            ? 'rounded-full px-3 py-1 text-xs font-semibold transition disabled:opacity-50 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20'
                            : 'rounded-full px-3 py-1 text-xs font-semibold transition disabled:opacity-50 bg-white/10 text-slate-400 hover:bg-white/20'
                        }
                      >
                        {study.isPublished ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {study.isPublished && (
                          <a
                            href={'/case-studies/' + study.slug}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                            title="View live"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <Link
                          to={'/admin/case-studies/' + study.id + '/edit'}
                          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(study)}
                          disabled={busyId === study.id}
                          className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {caseStudies.length === 0 && (
              <p className="px-5 py-10 text-center text-slate-500">
                No case studies yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}