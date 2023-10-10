import React from "react";
import BebeDiary from "../components/bebeFamilyPage/BebeDairy";
import BebeMall from "../components/bebeFamilyPage/BebeMall";
import title from "../images/green.png";
import kit from "../images/bebekit.png";

export default function BebeFamily() {
  return (
    <div className=" border-gray-200 border-t-2">
      <BebeDiary />
      <BebeMall />
      <div className="relative flex justify-center items-center mt-20 mb-10">
        <img src={title} alt="title" className="w-80 h-10" />
        <h1 className="absolute bottom-4 text-5xl">Bebe Kit</h1>
      </div>
      <p className="text-center text-2xl mb-16">
        아이의 첫 시작을 Bebe가 응원합니다.
        <br />
        "Bebekit"는 산모와 아이에게 필요한 용품과 정보가 20가지 들어있는
        상자이자 브랜드 그 자체를 의미합니다.
      </p>
      <div className="w-1/2 object-contain mx-auto mb-12 rounded-lg border-2 border-red-200">
        <img src={kit} alt="kit" />
      </div>
    </div>
  );
}
