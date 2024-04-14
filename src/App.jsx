import './App.css'
import NavBar from './NavBar'
import CountriesSearchField from './CountrySearchField'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col bg-light-theme-background font-Neunito-font'>
        <header>
          <NavBar />
        </header>
        <main className=''>
          <CountriesSearchField />
        </main>

        <footer>

        </footer>
      </div>
    </>

  )
}

export default App
