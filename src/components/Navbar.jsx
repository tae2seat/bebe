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
    }, 300);
  };

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
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex justify-center w-1/4 p-2"
      >
        <button className="w-16 h-16 flex items-center justify-center text-4xl shrink-0 ">
          <CiCircleMore />
        </button>
        <nav
          className={`absolute bg-brand2 text-gray-600 ${
            isMoreVisible ? "" : "hidden"
          } flex flex-col top-24 -right-52 z-10 rounded-b-xl text-center py-3 px-6 gap-2 bg-opacity-30`}
        >
          <h1 className="text-lg py-1 text-brand1">홈페이지 이동하기</h1>
          <a
            className="hover:underline  hover:text-brand1"
            href="https://www.mybebe.net/bebeFamily"
          >
            www.mybebe.net
          </a>
          <a
            className="hover:underline  hover:text-brand1"
            href="https://mall.mybebe.net/"
          >
            www.mall.mybebe.net
          </a>
          <a
            className="hover:underline  hover:text-brand1"
            href="https://diary.mybebe.net/"
          >
            www.diary.mybebe.net
          </a>
        </nav>
      </div>
    </header>
  );
}
