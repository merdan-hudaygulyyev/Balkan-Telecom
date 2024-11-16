import SearchIcon from "../icons/search/icon"
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa"
import { useState, useEffect } from "react"

const Topnavbar = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? true : false
  })

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])


  return (
    <div className="h-[75px] flex items-center ml-[20px]">
      <form>
        <div className="relative">
          <input
            type="text"
            placeholder="Search.."
            className="w-full bg-transparent p-[10px] rounded-[15px] border-solid border-2 border-blue-500 outline-none"
          />
          <span className="absolute top-[30%] right-[15px] text-black-600">
            <SearchIcon/>
          </span>
        </div>
      </form>
            <button className="text-blue-500 bg-slate-700 p-3 rounded-3xl absolute right-10"
            onClick={toggleDarkMode}>
                {
                  darkMode ? <FaRegMoon/> : <IoSunnySharp/>
                }
            </button>
    </div>
  );
};

export default Topnavbar;
