import React, { useRef, useState } from "react";
import MenuButton from "../components/ui/MenuButton";
import mainLogo from "../images/main-logo.png";
import { CiCircleMore } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMoreVisible, setMoreVisible] = useState(false);

  const timeoutRef = useRef();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setMoreVisible(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setMoreVisible(false);
    }, 500);
  };
  return (
    <header className="flex justify-between w-full h-24">
      <div className=" flex justify-center items-center w-1/4 p-2">
        <Link to="/">
          <img src={mainLogo} alt="logo" className="w-52 p-1" />
        </Link>
      </div>
      <nav className="flex justify-around items-center w-1/2 py-2">
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
      <div className="flex justify-center items-center w-1/4 p-2">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="w-16 h-16 flex items-center justify-center text-4xl shrink-0 ">
            <CiCircleMore />
          </button>
          <nav
            className={` absolute bg-yellow-300 ${
              isMoreVisible ? "" : "hidden"
            } flex flex-col top-24  z-10 text-center py-6 px-2 gap-2`}
          >
            <h1>홈페이지 이동하기</h1>
            <a href="https://www.mybebe.net/bebeFamily">www.mybebe.net</a>
            <a href="https://mall.mybebe.net/">www.mall.mybebe.net</a>
            <a href="https://diary.mybebe.net/">www.diary.mybebe.net</a>
          </nav>
        </div>
        <button className="w-16 h-16 flex items-center justify-center text-3xl shrink-0 ">
          <CiDark />
        </button>
      </div>
    </header>
  );
}
