

function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 py-8 shadow-md bg-white">
            <h1 className="font-bold text-lg text-light-theme-text">Where in the world?</h1>

            <button className="flex items-center font-semibold ml-2">
                <svg className="w-6 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>

                Dark Mode
            </button>
        </nav>

    );
}

export default NavBar