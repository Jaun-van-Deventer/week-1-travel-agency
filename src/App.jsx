import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import TourGrid from './components/TourGrid'
import Testimonials from './components/Testimonials'
import PlanCta from './components/PlanCta'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TourGrid />
        <Testimonials />
        <PlanCta />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}