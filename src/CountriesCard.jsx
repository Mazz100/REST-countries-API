import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";


function CountriesCard({ searchParams, searchCountry }) {

    const countriesData = useLoaderData();

    const displayCountries = countriesData.map(country => ({
        flags: country.flags.svg,
        flagAlt: country.flags.alt,
        name: country.name.common,
        population: country.population.toLocaleString(),
        region: country.region,
        capital: country.capital,
        cca3: country.cca3,
    }))

    //Storing the list 
    const countryList = displayCountries.filter(countryName => countryName.name.toLowerCase().includes(searchCountry /*Ensures field is not empty*/ && searchCountry.toLowerCase()) ||
        !searchCountry).map(country => {
            return <li className="bg-white mb-10 md:mb-0 max-w-[18.75rem] shadow-md rounded-md overflow-hidden hover:shadow-lg cursor-pointer will-change-transform focus:border-2 focus-visible:border-black hover:-translate-y-4 transition-[transform]"//This li acts as a card for each country
                key={country.flags} >
                <Link to={`/Details/${country.name}`}>

                    <img className="object-cover w-full h-[10.625rem]" src={country.flags} alt={!country.flagAlt ? country.name : country.flagAlt} />

                    <div className="p-6">
                        <h2 className="font-bold text-xl py-2  ">{country.name}</h2>
                        <p><span className="font-semibold mr-1">Population:</span>{country.population}</p>
                        <p><span className="font-semibold mr-1">Region:</span>{country.region}</p>
                        <p className="pb-12"><span className="font-semibold mr-1">Capital:</span>{country.capital}</p>
                    </div>
                </Link>
            </li>
        })


    return (

        <div className="my-6 mx-8">
            <ul className="flex flex-col justify-center items-center md:grid md:place-items-center md:grid-cols-2 md:gap-16 lg:gap-16 xl:grid-cols-4">
                {countryList.length > 0 ? countryList : <div className="text-lg col-span-3 lg:col-span-4">No Countries were found!</div>}
            </ul>
        </div >

    );
}

export default CountriesCard


//Exporting an asyc function loader and use it inside react router path
export async function CountriesLoader() {

    try {
        const response =
            await fetch(`https://restcountries.com/v3.1/all?status=true&fields=flags,name,population,currency,region,capital,cca3`);

        if (!response.ok) {
            throw new Error("Could not fetch countries");
        }

        return response.json();

    }

    catch (error) {
        console.error(error);
    }

}
