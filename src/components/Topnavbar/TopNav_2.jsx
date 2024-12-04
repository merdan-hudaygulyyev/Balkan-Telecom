import { IoIosNotifications } from "react-icons/io";
import SearchIcon from "../icons/search/icon";
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../libs/firebase.config";

const TopNav_2 = () => {
  const [show, setShow] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // null if signed out, user object if signed in
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <div className="h-[75px] flex justify-between p-4 bg-[#03346E] z-50 fixed top-0 dark:bg-slate-900 w-[79.2%] ml-0 rounded-b-xl">
      <div className="hidden md:flex">
        <form>
          <div className="relative">
            <input
              type="text"
              placeholder="Search.."
              className="w-[400px] placeholder:text-white text-white pr-9 bg-transparent p-[10px] rounded-[15px] border-solid border-2 border-blue-500 outline-none"
            />
            <span className="absolute top-[15px] left-[370px]">
              <SearchIcon />
            </span>
          </div>
        </form>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="text-blue-500 bg-slate-700 p-3 rounded-3xl "
          onClick={() => setShow(!show)}
        >
          <IoIosNotifications />

          <div
            className={`w-[300px] z-50 p-1.5 h-[300px] duration-200 absolute right-40 space-y-2 bg-white rounded-2xl dark:bg-slate-700 ${
              !show ? "hidden" : "block"
            }`}
          >
            <div className="border rounded-xl flex items-center justify-between p-2">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                className="rounded-full w-12 h-12"
              />
              <h2 className="ml-10 text-gray-700 dark:text-white ">
                Palwan H
              </h2>
              <button className="text-blue-500 rounded-3xl ml-12">
                <IoIosNotifications />
              </button>
            </div>
            <div className="border rounded-xl flex items-center justify-between p-2">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                className="rounded-full w-12 h-12"
              />
              <h2 className="ml-10 text-gray-700 dark:text-white ">
                Merdan H
              </h2>
              <button className="text-blue-500 rounded-3xl ml-12">
                <IoIosNotifications />
              </button>
            </div>
            <div className="border rounded-xl flex items-center justify-between p-2">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                className="rounded-full w-12 h-12"
              />
              <h2 className="ml-10 text-gray-700 dark:text-white ">
                Mekan M
              </h2>
              <button className="text-blue-500 rounded-3xl ml-12">
                <IoIosNotifications />
              </button>
            </div>
            <div className="border rounded-xl flex items-center justify-between p-2">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                className="rounded-full w-12 h-12"
              />
              <h2 className="ml-10 text-gray-700 dark:text-white ">
                Sazak W
              </h2>
              <button className="text-blue-500 rounded-3xl ml-12">
                <IoIosNotifications />
              </button>
            </div>
          </div>
        </button>
        <button
          className="text-blue-500 bg-slate-700 p-3 rounded-3xl"
          onClick={toggleDarkMode}
        >
          {darkMode ? <IoSunnySharp /> : <FaRegMoon />}
        </button>

        {user && (
          <div className="relative">
            <div
              onClick={() => setOpenProfile(!openProfile)}
              className="w-9 h-9 cursor-pointer"
            >
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div
              className={`${
                openProfile ? "block" : "hidden"
              } bg-[#1a1a1a] p-2 rounded-[8px] max-w-[171px] w-[171px] text-white absolute top-[44px] left-[-8rem]`}
            >
              <span className="break-all">{user?.email ?? ""}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav_2;
