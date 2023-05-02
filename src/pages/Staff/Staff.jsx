import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

function Staff() {
  return (
    <div className="w-[100%] h-[100vh] bg-red-200 ">
      <ul className="w-[100%] bg-slate-800 p-1 text-red-400 cursor-pointer flex justify-center items-center gap-4 text-2xl">
        <li>
          <NavLink to={"heads"}>Heads of sections</NavLink>
        </li>
        <li>
          <NavLink to={"accountant"}>Accountants</NavLink>
        </li>
        <li>
          <NavLink to={"workers"}>Workers</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

export default Staff;
