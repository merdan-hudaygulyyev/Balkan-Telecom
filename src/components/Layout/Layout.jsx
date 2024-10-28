import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Topnavbar from "../Topnavbar/Topnavbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="box-border min-h-screen overflow-y-scroll overflow-hidden 
         [&::-webkit-scrollbar]:w-2 
       [&::-webkit-scrollbar-track]:bg-slate-900
       [&::-webkit-scrollbar-thumb]:bg-[#2c58c0]
         [&::-webkit-scrollbar-thumb]:rounded-full bg-slate-900">
      <Sidebar />
      <div className="ml-[300px] h-screen w-full">
        <Topnavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
Layout.prototype = {
  children: PropTypes.element.isRequired,
};
