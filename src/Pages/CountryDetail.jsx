import { Link, useLoaderData } from "react-router-dom"
import { useParams } from "react-router-dom";
import HeaderPanel from "../HeaderPanel";

export default function CountryDetail() {
    const { countryId } = useParams();

    const countryDetail = useLoaderData();
    console.log(countryDetail);

    return (
        <div className='min-h-screen flex flex-col bg-light-theme-background font-Neunito-font'>
            <header className=''>
                <HeaderPanel />
            </header>

            <main>

            </main>
        </div>

    );
}

export const countryDetailsLoader = async ({ params }) => {
    const { countryId } = params;

    const response = await fetch('https://restcountries.com/v3.1/all?status=true&fields=flags,name' + countryId);

    return response.json();
}

