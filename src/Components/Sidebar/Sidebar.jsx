import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useSelector((state) => state.theme.colors);
  return (
    <div className={`lg:w-52 min-h-screen ${theme[0]} ${theme[1]}`}>
      Sidebar
    </div>
  );
};

export default Sidebar;
