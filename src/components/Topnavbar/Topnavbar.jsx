import React from "react";
import SearchIcon from "../icons/search/icon";

const Topnavbar = () => {
  return (
    <div className="h-[75px] flex items-center ml-[20px]">
      <form>
        <div className="relative">
          <input
            type="text"
            placeholder="Search.."
            className="w-full bg-transparent p-[10px] rounded-[15px] border-solid border-2 border-blue-500 outline-none text-white"
          />
          <span className="absolute top-[30%] right-[15px] ">
            <SearchIcon />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Topnavbar;
