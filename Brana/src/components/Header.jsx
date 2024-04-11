import { useState } from "react";
import brana_logo from "../assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const [state, setState] = useState(false);
  const location = useLocation();
  const navigation = [
    { title: "መነሻ ገጽ", path: "/blog/" },
    { title: "ተወዳጅ", path: "/blog/favourite" },
    { title: "ሰሞንኛ", path: "/blog/recent" },
    { title: "ዘውግ", path: "/blog/gener" },
  ];
  return (
    <nav className=" items-center mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
      <div className="flex justify-between">
        <a href="javascript:void(0)">
          <img src={brana_logo} width={160} height={40} alt="Float UI logo" />
        </a>
        <button
          className="text-gray-500 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
          state
            ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
            : "hidden"
        }`}
      >
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          {navigation.map((item, idx) => (
            <li className="text-2xl nav-text" key={idx}>
              <Link
                to={item.path}
                className={location.pathname === item.path? "py-2 px-5 rounded-lg font-medium text-white text-center corner-button duration-150 block md:py-3 md:inline " : " "}>
                {item.title}
              </Link>
            </li>
          ))}
        </div>
        {location.pathname === "/" && (
          <li className="order-2 py-5 md:py-0">
            <a
              href="javascript:void(0)"
              className="py-2 px-5 rounded-lg font-medium text-white text-center corner-button duration-150 block md:py-3 md:inline"
            >
              ይጀምሩ
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Header;
