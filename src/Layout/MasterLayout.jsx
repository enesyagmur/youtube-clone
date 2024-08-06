import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Searchbar from "../Components/Searchbar/Searchbar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div className="w-full mih-h-screen flex">
      <Sidebar />
      <div className="flex-grow h-full flex flex-col lg:ml-52">
        <Searchbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
