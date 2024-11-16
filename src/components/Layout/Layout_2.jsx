import PropTypes from "prop-types";
import ManageSidebar from "../ManageSideBar/ManageSidebar";
import TopNav_2 from "../Topnavbar/TopNav_2";

const Layout_2 = (props) => {
  const { children } = props;
  return (
    <div
      className="box-border min-h-screen overflow-y-auto overflow-x-hidden
       [&::-webkit-scrollbar]:w-2 
       [&::-webkit-scrollbar-track]:bg-slate-900
       [&::-webkit-scrollbar-thumb]:bg-[#2c58c0]
       [&::-webkit-scrollbar-thumb]:rounded-full bg-[#133E87] dark:bg-slate-900"
    >
      <ManageSidebar />
      <div className="ml-[300px] h-screen w-full">
        <TopNav_2 />
        {children}
      </div>
    </div>
  );
};

export default Layout_2;
Layout_2.prototype = {
  children: PropTypes.element.isRequired,
};
