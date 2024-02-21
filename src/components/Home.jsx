import { useEffect, useState } from "react"
import ListCountries from "./ListCountries"
import axios from "axios"

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeCountryName = (e) => {
    const newCountry = e.target.value;
    setCountryName(newCountry);

  }

  const handleChangeRegion = (e) => {
    const region = e.target.value;
    setRegion(region);

  }

  const countryByName = countries.filter((country) => country.name.common.toLowerCase().includes(countryName.toLowerCase()));

  const countryByRegion = countryByName.filter((country) => country.region.includes(region));


  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";

    axios.get(URL)
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err))

  }, []);

  return (
    <main className="p-4 py-6 max-w-[1200px] mx-auto">
      <form onSubmit={handleSubmit} className="grid gap-5 sm:flex sm:justify-between">
        <div className="flex sm:w-[400px]  p-3 gap-2 items-center bg-white/80 rounded-md darkTheme shadow-elements shadow-md">
          <i className='bx bx-search-alt-2 text-xl'></i>
          <input onChange={handleChangeCountryName} value={countryName} id="countryName" className="flex-1 bg-white/0 p-1 outline-none" type='text' placeholder="Search your country..." />
        </div>


        <select onChange={handleChangeRegion} className="max-w-[120px] bg-white/80 rounded-md p-3 darkTheme shadow-md shadow-elements">
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
      </form>

      <ListCountries countries={countryByRegion} />

    </main>
  )
}

export default Home
