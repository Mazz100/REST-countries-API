import './App.css'
import HeaderPanel from './HeaderPanel'
import CountriesSearchField from './CountrySearchField'
import FilterRegion from './FilterRegion'
import CountriesCard from './CountriesCard'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col bg-light-theme-background font-Neunito-font'>
        <header>
          <HeaderPanel />
        </header>
        <main className='flex flex-col'>
          <CountriesSearchField />
          <FilterRegion />
          <CountriesCard />
        </main>

        <footer>

        </footer>
      </div>
    </>

  )
}

export default App
