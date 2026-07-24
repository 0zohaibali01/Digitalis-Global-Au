import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import ErrorBoundary from './components/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))

function PageLoader() {
  return <div className="flex min-h-screen items-center justify-center text-brand">Loading...</div>
}

function App() {
  return (
    <ErrorBoundary>   
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/au" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/au/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/au/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/au/services/:slug" element={<ServicePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/au/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
            <Route path="/au/case-studies/:slug" element={<CaseStudyPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
