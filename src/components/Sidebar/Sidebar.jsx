import { useLocation } from "react-router-dom";
import { routes } from "../../assets/json/routes";

const Sidebar = () => {
  const location = useLocation();
  const activeIndex = routes.findIndex(
    (route) => route.pathname === location.pathname
  );

  return (
    <div className="h-screen bg-slate-900 fixed top-0 left-0 min-w-[300px] font-[sans-serif] overflow-hidden ">
      <div className="relative flex flex-col h-full">
        <a href="/">
          <h1 className="text-2xl p-5 pb-9 font-mono font-extrabold text-white ">
            <span className="text-blue-500 underline-anime">Balkan Telecom</span>
          </h1>
        </a>
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
      </div>
    </div>
  );
};

export default Sidebar;
