import React, { useEffect } from "react";


function CountriesSearchField({ setSearchParams, searchParams, searchCountry }) {


    const handleSearchInput = (e) => {
        e.preventDefault();

        //Updater function that adds value relatively
        setSearchParams(prev => {
            prev.set('country', e.target.value);
            return prev

        }, {
            replace: true,
        })


    }

    useEffect(() => {

        if (searchParams.has('country') && searchCountry == '') {
            searchParams.delete('country');
            setSearchParams(searchParams);
        }


    }, [searchCountry])

    return (
        <form>
            <div className="bg-white flex items-center shadow-lg my-10 mx-6 rounded-md overflow-auto focus:outline-1">
                <svg className="w-6 h-6 opacity-50 mx-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <label className="sr-only" htmlFor="searchCountry">Search bar</label>
                <input className="p-5 text-lg md:w-[240px] lg:w-[520px] lg:hover:bg-gray-100 placeholder:opacity-70 focus:outline-none transition-colors"
                    type="text"
                    placeholder="Search for a country"
                    id="searchCountry"
                    value={searchCountry || ''}
                    onChange={handleSearchInput}
                />

                {searchCountry && <button type="button" aria-label="Remove Input"
                    onClick={() => {
                        searchParams.delete('country');
                        setSearchParams(searchParams);
                    }}
                    className="transform rounded-full md:p-2 lg:p-4 opacity-70 md:mx-2 md:hover:bg-gray-200 hover:opacity-100 hover:scale-110 transition-all ">
                    <svg className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>}
            </div>

        </form>
    );

}
export default CountriesSearchField
