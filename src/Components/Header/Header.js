import React from "react";
import CustomLink from "./../CustomLink/CustomLink";
const Header = () => {
  return (
    <div className="flex justify-center gap-10 my-5 font-medium text-xl text-orange-400">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
};

export default Header;
