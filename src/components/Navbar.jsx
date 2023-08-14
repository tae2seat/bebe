import React, { useRef, useState } from "react";
import MenuButton from "../components/ui/MenuButton";
import mainLogo from "../images/main-logo.png";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center  w-full h-24">
      <Link to="/" className="flex justify-center w-1/4 p-2">
        <img src={mainLogo} alt="logo" className="w-52 p-1" />
      </Link>
      <nav className="flex justify-around w-1/2 py-2">
        <Link to="/">
          <MenuButton text={"Home"} />
        </Link>
        <Link to="/bebeFamily">
          <MenuButton text={"Bebe Family"} />
        </Link>
        <Link to="/crew">
          <MenuButton text={"Crew"} />
        </Link>
      </nav>
      <div className="flex justify-center w-1/4 p-2">
        <button className="w-16 h-16 flex items-center justify-center text-4xl shrink-0 ">
          <CiCircleMore />
        </button>
      </div>
    </header>
  );
}
