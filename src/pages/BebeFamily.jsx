import React, { useState } from "react";
import BebeDiary from "../components/bebeFamilyPage/BebeDairy";
import BebeMall from "../components/bebeFamilyPage/BebeMall";
import BebeCare from "../components/bebeFamilyPage/BebeCare";

export default function BebeFamily() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <nav className="border-b border-brand2">
        <ul className="flex justify-around items-center h-14 text-2xl text-brand4">
          <li onClick={() => setPage(1)}>
            <p className="cursor-pointer">Diary</p>
          </li>
          <li onClick={() => setPage(2)}>
            <p className="cursor-pointer">Mall</p>
          </li>
          <li onClick={() => setPage(3)}>
            <p className="cursor-pointer">Care</p>
          </li>
        </ul>
      </nav>
      {page === 1 ? (
        <BebeDiary />
      ) : page === 2 ? (
        <BebeMall />
      ) : page === 3 ? (
        <BebeCare />
      ) : null}
    </div>
  );
}
