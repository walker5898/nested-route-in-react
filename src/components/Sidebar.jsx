import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[20%] bg-black border-2 flex flex-col items-center gap-1 max-md:w-[100%]">
      <h1 className="text-4xl text-orange-600 p-5 hover:text-orange-200 cursor-pointer">
        Sidebar
      </h1>
      <div className="text-white text-2xl flex flex-col justify-between items-center gap-5 hover:underline max-md:flex">
        <Link to="/home">Home</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/shopping">Shopping</Link>
      </div>
    </div>
  );
}

export default Sidebar;
