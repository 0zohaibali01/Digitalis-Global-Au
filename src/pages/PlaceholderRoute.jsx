import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function PlaceholderRoute() {
  const location = useLocation()
  const { slug } = useParams()
  const isService = location.pathname.startsWith('/services/')

  return (
    <>
      <Helmet>
        <title>{isService ? 'Service Page Coming Soon' : 'Case Study Coming Soon'} | Digitalis Global</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-brand-light px-6 py-20 md:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center rounded-[2rem] border border-brand/10 bg-white p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Placeholder route</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand md:text-5xl font-display">
            {isService ? 'Service page' : 'Case study'} coming soon
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            The detailed experience for {slug} is being prepared. For now, you can return to the homepage and explore the full Australian campaign overview.
          </p>
          <Link to="/" className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover">
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  )
}