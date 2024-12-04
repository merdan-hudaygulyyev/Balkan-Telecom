import React from 'react'
import { routes } from "../../assets/json/routes";
import { useLocation } from "react-router-dom";


const Side = () => {
    const location = useLocation();
    const activeIndex = routes.findIndex(
      (route) => route.pathname === location.pathname
    );
  return (
    <ul className="space-y-5 flex-1">
          <li>
            <span className="text-white mx-8 font-mono">Ulgam menyusy</span>
          </li>
          {routes.map((route, index) => (
            <li key={route.pathname}>
              <a
                href={route.pathname}
                className={`text-sm flex mt-4 items-center ${
                  activeIndex === index ? "text-[#007bff]" : "text-white"
                } px-8 py-4 transition-all`}
              >
                <span>{route.icon}</span>
                <span>{route.name}</span>
              </a>
            </li>
          ))}
        </ul>
  )
}

export default Side
