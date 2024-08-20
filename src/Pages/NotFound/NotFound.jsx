import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const theme = useSelector((state) => state.theme.colors);
  const navigate = useNavigate();

  return (
    <div
      className={`w-full h-screen ${theme[0]} ${theme[1]} flex flex-col items-center justify-center`}
    >
      <p className="text-9xl font-extrabold text-red-700">404</p>
      <p className="text-lg mt-2">Opps! Page Not Found</p>
      <button
        className={`w-36 h-10 mt-2 ${theme[2]} cursor-pointer rounded-lg`}
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
