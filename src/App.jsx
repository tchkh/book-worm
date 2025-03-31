import Articles from './components/ArticlesSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='flex-grow'>
        <HeroSection />
        <Articles />
      </div>
      <Footer />
    </div>
  )
}

export default App
