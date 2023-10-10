import React from "react";
import title from "../../images/green.png";
import mall from "../../images/mall/home.jpg";

export default function BebeMall() {
  return (
    <div>
      <div className="relative flex justify-center items-center mt-20 mb-10">
        <img src={title} alt="title" className="w-80 h-10" />
        <h1 className="absolute bottom-4 text-5xl">Bebe Mall</h1>
      </div>
      <p className="text-center text-2xl mb-16">
        아이 용품 "Bebe Mall"에서 구입하세요. Best Products, High Quality
      </p>
      <img
        src={mall}
        alt="mall"
        className="w-1/2 mx-auto mb-12 rounded-lg border-2 border-red-200"
      />
      <div className="flex justify-center items-center">
        <a href="https://mall.mybebe.net/">
          👉🏻{" "}
          <span className="underline hover:text-red-400">
            베베 몰 홈페이지 바로가기
          </span>
        </a>{" "}
      </div>
    </div>
  );
}
