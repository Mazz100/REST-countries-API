import React, { useState, useContext, useEffect } from "react";


function CountriesCard() {
    const [countryData, setCountriesData] = useState([]);

    async function CountriesRESTAPI() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/independent?status=true&fields=flags,name,population,region,capital");

            if (!response.ok) {
                throw new Error("Could not fetch resources");
            }

            const countries = await response.json();

            const displayCountries = countries.map(country => ({
                flags: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,

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
        <div className="flex flex-col justify-center items-center">
            <ul className="cursor-pointer my-8 mx-6">
                {countryData.map(countries =>
                    <li className="bg-white mb-10 shadow-md rounded-lg hover:shadow-lg hover:"//This li acts as a card for each country
                        key={countries.flags}>

                        <img className="rounded-t-lg w-full" src={countries.flags} alt={countries.name} />

                        <div className="pl-5">
                            <h2 className="font-bold text-xl py-4  ">{countries.name}</h2>
                            <p><span className="font-semibold mr-1">Population:</span>{countries.population}</p>
                            <p><span className="font-semibold mr-1">Region:</span>{countries.region}</p>
                            <p className="pb-12"><span className="font-semibold mr-1">Capital:</span>{countries.capital}</p>
                        </div>
                    </li>)}
            </ul>
        </div>

    );
}

export default CountriesCard