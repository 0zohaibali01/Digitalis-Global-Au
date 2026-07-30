import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'


const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'))
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'))
const AdminCaseStudyFormPage = lazy(() => import('./pages/admin/AdminCaseStudyFormPage'))

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
        <div className="absolute h-16 w-16 animate-ping rounded-full border border-cyan-500/30 duration-1000" />
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-100 border-t-cyan-600 border-r-cyan-600 shadow-sm" />
        <div className="absolute h-2.5 w-2.5 rounded-full bg-[#103D4D]" />
      </div>

      <div className="mt-6 flex flex-col items-center gap-1">
        <span className="text-[13px] font-semibold uppercase tracking-widest text-[#103D4D]">
          Digitalis Global
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500" />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ScrollToTop />
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
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/au/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/au/contact" element={<ContactPage />} />
            </Route>

            {/* Admin routes — deliberately outside RootLayout, no public nav/footer */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin/case-studies/new" element={<AdminCaseStudyFormPage />} />
              <Route path="/admin/case-studies/:id/edit" element={<AdminCaseStudyFormPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App