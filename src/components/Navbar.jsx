import React from "react";
import { BsSun } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="w-[100%] p-5 flex justify-between items-center bg-slate-400  shadow-lg sticky top-0  dark:bg-black">
      <h1 className="font-Kanit text-black text-xl font-bold dark:text-white">
        Logo
      </h1>
      <NavLink
        className="border-2 border-orange-500 bg-slate-400 text-white p-2 rounded-lg"
        to="/home"
      >
        Main Page
      </NavLink>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            More
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Home
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  About
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Blog
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Settings
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  News
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>

      {darkMode ? (
        <BsSun
          onClick={() => setDarkMode(false)}
          className="text-lg text-white cursor-pointer"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setDarkMode(true)}
          className="text-lg text-black cursor-pointer"
        />
      )}
    </div>
  );
}

export default Navbar;
