import SearchIcon from "../icons/search/icon"
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


const Topnavbar = () => {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login
  };


  return (
    <div className="h-[75px] flex items-center justify-between ml-[10px]">
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
        <div className="flex justify-between mr-2">
              <button className="text-blue-100 dark:text-blue-500 bg-blue-700 dark:bg-slate-700 p-3 rounded-3xl"
              onClick={toggleDarkMode}>
                  {
                    darkMode ? <FaRegMoon/> : <IoSunnySharp/>
                  }
              </button>
              <button
              onClick={handleLogout} 
              className="bg-blue-600 hover:bg-blue-800 p-2 ml-4 rounded-xl text-white dark:text-white">Logout</button>
        </div>
    </div>
  );
};

export default Topnavbar;
