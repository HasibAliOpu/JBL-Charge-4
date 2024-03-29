import React, { useState } from "react";
import CustomLink from "./../CustomLink/CustomLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 md:py-5 bg-orange-100">
      <div
        onClick={() => setOpen(!open)}
        className="w-8 h-8 md:hidden text-white bg-orange-400 rounded-full"
      >
        {open ? <XIcon /> : <MenuIcon />}
      </div>
      <ul
        className={`md:flex justify-center gap-10  font-medium text-xl w-full text-center bg-orange-100 text-orange-500 md:static absolute ${
          open ? "top-18" : "top-[-220px]"
        }`}
      >
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/reviews">Reviews</CustomLink>
        </li>
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
        <li>
          <CustomLink to="/blogs">Blogs</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
