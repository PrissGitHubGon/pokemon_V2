// import { useState } from "react";

import { Link } from "react-router-dom";

const NavDesktop = () => {
  return (
    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5 ">
      <li>
        <Link to="/home"> home</Link>
      </li>
      <li>
        <Link to="/competences">competences</Link>
      </li>
      <li>
        <a href="*" className="flex">
          <p className="mr-5"> link</p>{" "}
          <i className="fa-solid fa-file-lines pt-1"></i>
        </a>
      </li>{" "}
      <li>
        <button className="">FR</button>
        <span></span> | <span></span>
        <button className="">EN</button>
      </li>{" "}
    </ul>
  );
};
export default NavDesktop;
