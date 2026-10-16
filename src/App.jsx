import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import TourGrid from './components/TourGrid'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TourGrid />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}