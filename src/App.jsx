import './App.css'
import HeaderPanel from './HeaderPanel'
import CountriesSearchField from './CountrySearchField'
import FilterRegion from './FilterRegion'
import CountriesCard from './CountriesCard'
import { useSearchParams } from 'react-router-dom'
import React, { useState } from 'react'


function App() {
  const [searchParams, setSearchParams] = useSearchParams({ country: "" });
  const [regionParam, setRegionParam] = useSearchParams({ region: "" });


  let searchCountry = searchParams.get('country');
  let filterRegion = regionParam.get('region');


  return (

    <div className='min-h-screen flex flex-col bg-light-theme-background font-Neunito-font'>
      <header className=''>
        <HeaderPanel />
      </header>
      <main className='md:mx-10'>
        <h1 className='sr-only'>Rest Countries API</h1>
        <div className='md:flex items-center justify-between'>
          <CountriesSearchField searchParams={searchParams} setSearchParams={setSearchParams} searchCountry={searchCountry} />
          <FilterRegion setRegionParam={setRegionParam} regionParam={regionParam} filterRegion={filterRegion} />
        </div>
        <CountriesCard searchCountry={searchCountry} filterRegion={filterRegion} />

        <button className='fixed bottom-0 left-0 transform translate-x-1/2 bg-white shadow-md p-4 mb-6 rounded-full hover:scale-105 transition-transform'
          aria-label='scroll to top button'
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}><svg className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </main>
    </div>

  )
}

export default App
