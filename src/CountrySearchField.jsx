import React, { useEffect } from "react";

function CountriesSearchField({
  setSearchParams,
  searchParams,
  searchCountry,
}) {
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

  useEffect(() => {
    if (searchParams.has("country") && searchCountry == "") {
      searchParams.delete("country");
      setSearchParams(searchParams);
    }
  }, [searchCountry]);

  return (
    <form>
      <div className="mx-6 my-10 flex items-center rounded-md bg-light-theme-elements shadow-lg dark:bg-dark-theme-elements">
        <svg
          className="mx-3 h-6 w-6 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <label className="sr-only" htmlFor="searchCountry">
          Search bar
        </label>
        <input
          className="rounded-br-md rounded-tr-md p-5 text-lg transition-colors placeholder:opacity-70 focus-visible:outline-offset-0 dark:bg-dark-theme-elements md:w-[240px] lg:w-[520px] lg:hover:bg-gray-100 lg:hover:dark:bg-slate-700"
          type="search"
          placeholder="Search for a country"
          id="searchCountry"
          value={searchCountry || ""}
          onChange={handleSearchInput}
        />
      </div>
    </form>
  );
}
export default CountriesSearchField;
