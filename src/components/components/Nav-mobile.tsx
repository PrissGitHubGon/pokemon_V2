import { useState } from "react";

import { Link } from "react-router-dom";

const NavMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const handleIsOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeSideBar = () => {
    setIsNavOpen(false);
  };

  return (
    <section className="MOBILE-MENU flex lg:hidden mr-7 ">
      <div
        className="HAMBURGER-ICON space-y-2 cursor-pointer"
        onClick={handleIsOpen}
      >
        <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></span>
        <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></span>
        <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></span>
      </div>

      <div className={isNavOpen ? "showMenuNav " : "hideMenuNav "}>
        <div
          className="absolute top-0 right-0 px-8 py-8 h-screen "
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className=" bg-clip-text  h-8 w-8 animate-pulse text-sky-500 cursor-pointer "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[300px] text-black ">
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <Link to="/abecedaire" onClick={closeSideBar}>
              {/* Abecedaire */}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default NavMobile;
