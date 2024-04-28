import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";


function CountriesSearchField() {
    const [searchParams, setSearchParams] = useSearchParams({ country: "" });


    const country = searchParams.get('country');


    async function searchCountry() {
        try {

            const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

            if (!response.ok) {
                throw new Error('Could not load resource!');
            }

            const results = await response.json();

            console.log(results);



        }

        catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        searchCountry();
    }, [country])

    return (
        <form>
            <div className="bg-white flex items-center shadow-lg my-10 mx-6 rounded-md overflow-hidden">
                <svg className="w-6 h-6 opacity-50 mx-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <label className="sr-only" htmlFor="searchCountry">Search bar</label>
                <input className="p-2 py-4 text-lg md:w-[240px] lg:w-[520px] lg:hover:bg-gray-100 placeholder:opacity-70 focus:outline-none transition-colors"
                    type="text"
                    placeholder="Search for a country"
                    id="searchCountry"
                    value={country}
                    onChange={(e) => setSearchParams(prev => {
                        prev.set('country', e.target.value);
                        return prev;
                    }, {
                        replace: true,//this removes all params at once when pressing back
                    })}
                />
            </div>

        </form>
    );
}

export default CountriesSearchField
