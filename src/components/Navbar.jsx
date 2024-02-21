import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    darkTheme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove("dark");
  }, [darkTheme])

  return (
    <nav className="p-4 text-black/80 bg-white/80 shadow-md shadow-elements flex justify-between text-lg darkTheme">
      <h2 className="font-bold">Where in the world</h2>
      <button onClick={handleChangeTheme} className=" flex items-center gap-1">
        {
          darkTheme ? <i className='bx bxs-moon' ></i> : <i className='bx bx-moon' ></i>
        }

        Dark mode
      </button>
    </nav>
  )
}

export default Navbar;

