import logo from '../../assets/img/balkan-logo.png'
import { routes_2 } from '../../assets/json/routes_2'
import { useLocation } from 'react-router-dom';

const ManageSidebar = () => {
   const location = useLocation();
   const activeIndex = routes_2.findIndex(
     (route) => route.pathname === location.pathname
   )

  return (
    <div className={`h-[300px] rounded-xl m-1 w-[19%] bg-[#03346E] hover:shadow-md hover:shadow-blue-500 transition-all duration-300 dark:bg-slate-800 fixed top-0 left-0  font-[sans-serif] overflow-hidden`}>
         <div className='flex items-center mx-4'>
            <a href="/">
               <img src={logo} className='w-8 h-8 hidden md:flex mt-1'/>
            </a>
            <h2 className='text-blue-500 text-xl ml-3 font-mono'>Admin</h2>
         </div>

         <ul>
            {
               routes_2.map((route, index) => (
                <li key={route.pathname}>
                  <a
                     href={route.pathname}
                     className={` flex mt-4 items-center font-mono ${
                        activeIndex === index ? "text-[#007bff]" : "text-white"
                     } px-8 py-4 transition-all`}
                  >
                     <span className='underline-anime'>{route.name}</span>
                  </a>
               </li>
               ))
            }
         </ul>
   </div>
  )
}

export default ManageSidebar
