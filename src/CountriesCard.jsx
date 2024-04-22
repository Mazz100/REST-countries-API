import React, { useState, useContext, createContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

function CountriesCard() {
    const [countryData, setCountriesData] = useState([]);
    


    async function CountriesRESTAPI() {

        try {
            const response =
                await fetch("https://restcountries.com/v3.1/all?status=true&fields=flags,name,population,region,capital,borders,cca3");

            if (!response.ok) {
                throw new Error("Could not fetch countries");
            }

            const countries = await response.json();


            const displayCountries = countries.map(country => ({
                flags: country.flags.png,
                flagAlt: country.flags.alt,
                name: country.name.common,
                population: country.population.toLocaleString(),
                region: country.region,
                capital: country.capital,
                border: country.borders,
            }))


            setCountriesData(displayCountries);


        }

        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        CountriesRESTAPI();
    }, [])



    return (
        <div className="my-6 mx-8">
            <ul className="flex flex-col justify-center items-center md:grid md:place-items-center md:grid-cols-2 md:gap-16 lg:gap-16 xl:grid-cols-4">
                {countryData.map(countries =>
                    <li className="bg-white mb-10 md:mb-0 w-[300px] h-[360px] shadow-md rounded-md overflow-hidden hover:shadow-lg cursor-pointer will-change-transform hover:-translate-y-4 transition-[transform]"//This li acts as a card for each country
                        key={countries.flags} >
                        <Link to={`/Details/country=${countries.name}`}>

                            <img className="object-cover w-full h-[170px]" src={countries.flags} alt={!countries.flagAlt ? countries.name : countries.flagAlt} />

                            <div className="p-6">
                                <h2 className="font-bold text-xl py-2  ">{countries.name}</h2>
                                <p><span className="font-semibold mr-1">Population:</span>{countries.population}</p>
                                <p><span className="font-semibold mr-1">Region:</span>{countries.region}</p>
                                <p className="pb-12"><span className="font-semibold mr-1">Capital:</span>{countries.capital}</p>
                            </div>
                        </Link>
                    </li>

                )}
            </ul>
        </div >

    );
}

export default CountriesCard


