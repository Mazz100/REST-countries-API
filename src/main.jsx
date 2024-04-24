import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import CountryDetail, { countryDetailsLoader } from './Pages/CountryDetail.jsx'
import { CountriesLoader } from './CountriesCard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: CountriesLoader,
    errorElement: <NotFoundPage />,
  },

  {
    path: '/Details',
    element: <CountryDetail />,
  },

  {
    path: `/Details/:countryId`,
    element: <CountryDetail />,
    errorElement: <NotFoundPage />,
    loader: countryDetailsLoader,
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
