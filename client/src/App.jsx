import Search from './components/search'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import Sections from './components/sections'

function App() {

  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Hero />
        <Search />
        <Cards />
        <Sections />
      </div>
    </>
  )
}

export default App
