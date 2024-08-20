import React from "react";
import { useSelector } from "react-redux";
import loadingGif from "../../Assets/loading3.gif";

const Loading = () => {
  const theme = useSelector((state) => state.theme.colors);

  return (
    <div className={`w-full min-h-screen flex items-center justify-center`}>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
