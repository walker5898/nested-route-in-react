import React from "react";
import Sidebar from "../Sidebar";
import MainContent from "./MainContent";
// import ReactSwitch from "react-switch";

function Main() {
  return (
    <main className="w-[100%] h-[100vh] flex max-md:flex-col">
      {/* <div className="w-[100%] h-[100vh] min-h-screen bg-slate-300 dark:bg-slate-700"> */}
      <Sidebar />
      <MainContent />
      {/* <div className='w-[100vw] h-[100vh] flex justify-center items-center font-Kanit'>
          <label className='m-2'>{light==="sun"?"Light Mode":"Dark Mode"}</label>
          <ReactSwitch onChange={toggleLight} checked={light === "moon"}/>
        </div> */}
      {/* </div> */}
    </main>
  );
}

export default Main;
