import { useEffect, useState } from 'react'
import { getCourts } from '../../services/courtService'
import type { Court } from '../../types/court'

export default function Courts() {
  const [courts, setCourts] = useState<Court[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getCourts()
      .then(setCourts)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-slate-600">Loading courts...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">Courts</h1>
      {courts.length === 0 ? (
        <p className="mt-2 text-slate-600">No courts available yet.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courts.map((court) => (
            <div
              key={court.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-800">
                {court.name}
              </h2>
              <p className="mt-1 text-slate-600">
                {court.description ?? 'No description'}
              </p>
              <p className="mt-3 font-semibold text-emerald-600">
                ₱{court.hourlyRate.toFixed(2)} / hour
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}