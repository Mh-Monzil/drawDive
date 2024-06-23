import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Profile from "./Profile";

const Navbar = () => {
  const { user, loading } = UseAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState('light');
  const [bgColor, setBgColor] = useState(null);
  

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme)
    if(theme === 'light'){
      setBgColor('bg-white')
    }else{
      setBgColor('bg-[#0F172A]')
    }
  },[theme])

  const handleTheme = (e) => {
    if(e.target.checked){
      setTheme('night')
    }else{
      setTheme('light')
    }
  }
  // console.log(theme);



  const [scroll, setScroll] = useState(false);

  const TOP_OFFSET = 80;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? `text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1 `
            : `px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300 `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all_art_craft"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        All Art & Craft Item
      </NavLink>
      <NavLink
        to="/add-craft_item"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        Add Craft Item
      </NavLink>
      <NavLink
        to="/my_art_craft_list"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        My Art&Craft List
      </NavLink>
    </>
  );
  return (
    <div className={`${
      scroll
        ? `navbar max-w-[1440px] mx-auto fixed top-0 py-3 z-30 md:px-6 lg:px-10 ${bgColor} `
        : "navbar max-w-[1440px] mx-auto py-3 z-30 md:px-8"
    }`}>
      <div className="navbar-start ">
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="dropdown z-50"
        >
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`${
              showDropdown ? "flex" : "hidden"
            } menu menu-sm dropdown-content mt-6 z-[1] shadow bg-base-100 rounded-box w-52 p-4 space-y-2`}
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/" className="">
          <p className="text-3xl font-bold">
            Draw<span className="text-[#E76F51]">Dive</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7">{NavLinks}</ul>
      </div>
      <div className="navbar-end  font-semibold">
        
        {loading ? (
          <span className="loading loading-spinner text-error"></span>
        ) : !loading && user ? (
          <Profile user={user} />
        ) : !loading && !user ? (
          <div className="flex gap-3">
            <Link
              to="/register"
              className="px-5 py-2 rounded-lg -skew-x-12 bg-[#E76F51] hover:bg-[#da5432] hidden sm:flex text-white"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg -skew-x-12 bg-[#E76F51] hover:bg-[#da5432] text-white"
            >
              Login
            </Link>
          </div>
        ) : (
          ""
        )}
        <label className="swap swap-rotate pl-2 md:pl-4">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleTheme}
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
