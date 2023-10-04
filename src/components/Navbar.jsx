import React from "react";
import MenuButton from "../components/ui/MenuButton";
import mainLogo from "../images/main-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full h-24">
      <Link to="/" className="flex justify-center w-1/4 p-2">
        <img src={mainLogo} alt="logo" className="w-52 p-2" />
      </Link>
      <nav className="flex justify-around w-1/2 mr-10">
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
    </header>
  );
}
