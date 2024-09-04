import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderPanel() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "",
  );
  const darkSheme = window.matchMedia("(prefers-color-scheme: dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkSheme.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    const toggleTheme = theme === "dark" ? "light" : "dark";

    setTheme(toggleTheme);
  };

  return (
    <div className="flex items-center justify-between bg-light-theme-elements p-4 py-8 shadow-sm dark:bg-dark-theme-elements md:px-12">
      <p className="text-balance text-lg font-bold">
        <Link to="/">Where in the world?</Link>
      </p>

      <button
        className="ml-2 flex items-center"
        aria-pressed={theme == "light" ? "false" : "true"}
        onClick={handleThemeSwitcher}
      >
        {theme == "dark" ? (
          <svg
            className="mx-3 h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        ) : (
          <svg
            className="mx-3 h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        )}

        {theme == "dark" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default HeaderPanel;
