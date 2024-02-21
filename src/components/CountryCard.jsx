
const CountryCard = ({ country }) => {

  const capitals = country.capital?.join(', ');
  return (
    <article className="shadow-elements bg-white/80 rounded-md shadow-md overflow-hidden darkTheme">
      <div className="h-[160px] shadow-elements shadow-sm">
        <img className="h-full w-full object-cover" src={country.flags.svg} />
      </div>

      <section className="p-2">
        <h3 className="text-2xl font-bold">{country.name.common}</h3>
        <ul>
          <li><span className="font-semibold">Population:</span> {country.population}</li>
          <li><span className="font-semibold">Region:</span> {country.region}</li>
          <li><span className="font-semibold">Capital:</span> {capitals ?? "N/A"}</li>
        </ul>
      </section>

    </article>
  )
}

export default CountryCard; 
