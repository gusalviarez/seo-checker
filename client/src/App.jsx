import Search from './components/search'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import Sections from './components/sections'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Hero />
        <Search />
        <Cards />
        <Sections />
        <Footer />
      </div>
    </>
  )
}

export default App
