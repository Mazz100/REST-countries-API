import './App.css'
import HeaderPanel from './HeaderPanel'
import CountriesSearchField from './CountrySearchField'
import FilterRegion from './FilterRegion'
import CountriesCard from './CountriesCard'


function App() {


  return (
  
      <div className='min-h-screen flex flex-col bg-light-theme-background font-Neunito-font'>
        <header className=''>
          <HeaderPanel />
        </header>
        <main className='md:mx-10'>
          <h1 className='sr-only'>Rest Countries API</h1>
          <div className='md:flex items-center justify-between'>
            <CountriesSearchField />
            <FilterRegion />
          </div>
          <CountriesCard />
        </main>

        <footer>

        </footer>
      </div>

  )
}

export default App
