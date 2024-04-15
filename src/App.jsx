import './App.css'
import HeaderPanel from './HeaderPanel'
import CountriesSearchField from './CountrySearchField'
import FilterRegion from './FilterRegion'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col bg-light-theme-background font-Neunito-font'>
        <header>
          <HeaderPanel />
        </header>
        <main className=''>
          <CountriesSearchField />
          <FilterRegion />
        </main>

        <footer>

        </footer>
      </div>
    </>

  )
}

export default App
