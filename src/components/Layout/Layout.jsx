import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Topnavbar from "../Topnavbar/Topnavbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="box-border overflow-x-hidden bg-[#C6E7FF]  dark:bg-slate-900 overflow-y-auto">
      <Sidebar />
      <div className="ml-[300px] min-h-screen w-[calc(100%-300px)] overflow-y-auto">
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
