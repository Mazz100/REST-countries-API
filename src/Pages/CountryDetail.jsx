import HeaderPanel from "../HeaderPanel";
import { Link, useLoaderData } from "react-router-dom";

export default function CountryDetail() {
  const countryDetail = useLoaderData();

  return (
    <div className="flex min-h-screen flex-col bg-light-theme-background font-Neunito-font text-light-theme-text dark:bg-dark-theme-background dark:text-dark-theme-text">
      <header className="">
        <HeaderPanel />
      </header>

      <main className="mx-8 flex flex-1 flex-col items-center justify-start lg:mx-14 lg:mt-8">
        <div className="lg:grid lg:grid-cols-3 lg:place-content-center lg:place-items-center lg:gap-4">
          <Link
            to="/"
            className="mt-5 inline-flex gap-4 self-start rounded-sm bg-light-theme-elements p-2 px-6 shadow-md dark:bg-dark-theme-elements lg:place-self-start"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            Back
          </Link>

          <img
            className="my-10 w-full rounded-md md:max-w-[820px] lg:col-start-1 lg:col-end-2 lg:row-span-2"
            src={countryDetail.flags}
            alt={
              !countryDetail.flagAlt
                ? countryDetail.flagAlt
                : countryDetail.name
            }
          />

          <div className="mb-6 flex flex-col gap-2 lg:col-start-2 lg:mb-0">
            <h1 className="mb-4 text-3xl font-bold">{countryDetail.name}</h1>

            <p>
              Native Name:
              <span className="opacity-60">{countryDetail.nativeName}</span>
            </p>
            <p>
              Population:
              <span className="opacity-60"> {countryDetail.population}</span>
            </p>
            <p>
              Region:
              <span className="opacity-60"> {countryDetail.region}</span>
            </p>
            <p>
              Sub Region:
              <span className="opacity-60"> {countryDetail.subRegion}</span>
            </p>
            <p>
              Capital:
              <span className="opacity-60"> {countryDetail.capital}</span>
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-2 lg:col-start-3 lg:mb-0">
            <p>
              Top Level Domain:
              <span className="opacity-60">
                {" "}
                {countryDetail.topLevelDomain}
              </span>
            </p>
            <p>
              Currencies:
              <span className="opacity-60"> {countryDetail.currency}</span>
            </p>
            <p>
              Languages:
              <span className="opacity-60"> {countryDetail.languages}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:col-start-2 lg:col-end-3">
            <h2 className="text-lg">Border Countries:</h2>

            {countryDetail.borders ? (
              countryDetail.borders.map((border) => (
                <Link
                  key={border.code}
                  className="bg-light-theme-elements p-2 shadow-md dark:bg-dark-theme-elements"
                  to={`/Details/${border.name}`}
                >
                  {border.name}
                </Link>
              ))
            ) : (
              <p>No border countries.</p>
            )}
          </div>
        </div>
      </main>

      <footer className="text-balance p-4 text-center">
        <p className="text-sm">
          Challenge by{" "}
          <a className="text-blue-700" href="frontendmentor.io">
            Frontend Mentor.
          </a>{" "}
          coded by{" "}
          <a className="text-blue-700" href="https://github.com/Mazz100">
            Mazen Hassan.
          </a>
        </p>
      </footer>
    </div>
  );
}

//Exporting an asyc function loader and use it inside react router path

export const countryDetailsLoader = async ({ params }) => {
  const { countryId } = params;

  try {
    // destructuring array for single object access
    const [rawCountry] = await fetch(
      `https://restcountries.com/v3.1/name/${countryId}?fullText=true&fields=flags,name,nativeName,population,region,subregion,capital,tld,currencies,languages,borders`,
    ).then((res) => res.json());

    const borderQuery = rawCountry.borders.join(",");

    //Extracting borders as an array of string then passing it to alpha API endpoint
    const borders =
      borderQuery &&
      (await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderQuery}`)
        .then((res) => res.json())
        .then((countries) =>
          countries.map((country) => ({
            name: country.name.common,
            code: country.cca3,
          })),
        ));

    //Mapping all country details using Destructured rawCountries assingment and borders mapping
    const countryDetail = {
      flags: rawCountry.flags.svg,
      flagAlt: rawCountry.flags.alt,
      name: rawCountry.name.common,
      nativeName: Object.entries(rawCountry.name.nativeName)
        //Mapping through nativeName values with unique key
        .map(([key, value]) => ` ${value.official}`)
        .join(", "),
      population: rawCountry.population.toLocaleString(),
      region: rawCountry.region,
      subRegion: rawCountry.subregion,
      topLevelDomain: rawCountry.tld,
      capital: rawCountry.capital,
      languages: Object.values(rawCountry.languages).join(", "),
      currency: Object.entries(rawCountry.currencies)
        .map(([key, value]) => `${value.name}`)
        .join(", "),
      borders: borders,
    };

    return countryDetail;
  } catch (error) {
    console.log(error);
  }
};
