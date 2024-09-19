import "./App.css";
import HeaderPanel from "./HeaderPanel";
import CountriesSearchField from "./CountrySearchField";
import FilterRegion from "./FilterRegion";
/* import CountriesCard from "./CountriesCard"; */
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";
const LazyCountries = lazy(() => import("./CountriesCard"));

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ country: "" });
  const [regionParam, setRegionParam] = useSearchParams({ region: "" });

  let searchCountry = searchParams.get("country");
  let filterRegion = regionParam.get("region");

  const [isScroll, setIsScroll] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchInput = (e) => {
    e.preventDefault();

    //Updater function that adds value relatively
    setSearchParams(
      (prev) => {
        prev.set("country", e.target.value);
        return prev;
      },
      {
        replace: true,
      },
    );
  };

  //Call setter for updating searchParam state
  const updateSearchState = () => {
    setSearchParams(searchParams);
  };

  const handleFilterRegion = (value) => {
    setRegionParam(
      (r) => {
        r.set("region", value);
        return r;
      },
      { replace: true },
    );
  };

  const resetFilter = () => {
    regionParam.delete("region");
    setRegionParam(regionParam);
  };

  return (
    <div className="flex min-h-screen flex-col bg-light-theme-background font-Neunito-font text-light-theme-text dark:bg-dark-theme-background dark:text-dark-theme-text">
      <header>
        <HeaderPanel />
      </header>
      <main className="md:mx-10 lg:mx-20">
        <h1 className="sr-only">Rest Countries API</h1>
        <div className="items-center justify-between md:flex">
          <CountriesSearchField
            searchParams={searchParams}
            searchCountry={searchCountry}
            onSearchChange={handleSearchInput}
            updateSearchState={updateSearchState}
          />
          <FilterRegion
            regionParam={regionParam}
            filterRegion={filterRegion}
            onFilterChange={(value) => handleFilterRegion(value)}
            resetFilter={resetFilter}
          />
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <LazyCountries
            searchCountry={searchCountry}
            filterRegion={filterRegion}
          />
        </Suspense>

        {isScroll && (
          <button
            className="fixed bottom-0 left-0 mb-6 translate-x-1/2 transform rounded-full bg-light-theme-elements p-4 shadow-md transition-transform hover:scale-105 dark:bg-dark-theme-elements"
            aria-label="scroll to top button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
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
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
