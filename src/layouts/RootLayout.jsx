import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/ScrollToTop'
import DeferredSplashCursor from '../components/DeferredSplashCursor'


export default function RootLayout() {
  return (
    <div id="top">
      <ScrollToTop />
      <DeferredSplashCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
