import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function CountriesCard({ searchCountry, filterRegion }) {
  const countriesData = useLoaderData();

  const displayCountries = countriesData.map((country) => ({
    flags: country.flags.svg,
    flagAlt: country.flags.alt,
    name: country.name.common,
    population: country.population.toLocaleString(),
    region: country.region,
    capital: country.capital,
    cca3: country.cca3,
  }));

  //Storing the list
  const countryList = displayCountries
    .filter(
      (countryRegion) =>
        countryRegion.region
          .toLowerCase()
          .includes(filterRegion && filterRegion.toLowerCase()) ||
        !filterRegion,
    )

    .filter(
      (countryName) =>
        countryName.name
          .toLowerCase()
          .includes(searchCountry && searchCountry.toLowerCase()) ||
        !searchCountry,
    )

    .map((country) => {
      return (
        <li
          className="mb-10 max-w-[18.75rem] cursor-pointer rounded-md bg-light-theme-elements shadow-md transition-transform will-change-transform hover:-translate-y-4 hover:shadow-lg dark:bg-dark-theme-elements md:mb-0" //This li acts as a card for each country
          key={country.flags}
        >
          <Link to={`Details/${country.name}`} className="block rounded-md">
            <img
              className="max-h-[10.625rem] w-full rounded-tl-md rounded-tr-md object-cover"
              src={country.flags}
              alt={!country.flagAlt ? country.name : country.flagAlt}
            />

            <div className="p-6">
              <h2 className="py-2 text-xl font-semibold">{country.name}</h2>
              <p>
                Population:
                <span className="ml-[2px] opacity-70">
                  {country.population}
                </span>
              </p>
              <p>
                Region:
                <span className="ml-[2px] opacity-70">{country.region}</span>
              </p>
              <p className="pb-12">
                Capital:
                <span className="ml-[2px] opacity-70">{country.capital}</span>
              </p>
            </div>
          </Link>
        </li>
      );
    });

  return (
    <div className="mx-12 my-6">
      <ul className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:place-items-center md:gap-16 lg:gap-16 xl:grid-cols-4">
        {countryList.length > 0 ? (
          countryList
        ) : (
          <div className="col-span-3 max-w-[480px] overflow-hidden text-ellipsis whitespace-nowrap text-lg lg:col-span-4">
            No Countries were found for {`"${searchCountry}"`}
          </div>
        )}
      </ul>
    </div>
  );
}

export default CountriesCard;

//Exporting an asyc function loader and use it inside react router path
export async function CountriesLoader() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?status=true&fields=flags,name,population,currency,region,capital,cca3`,
    );

    if (!response.ok) {
      throw new Error("Could not fetch countries");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
