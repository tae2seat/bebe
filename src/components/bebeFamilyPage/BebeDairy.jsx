import React from "react";
import title from "../../images/green.png";
import diary from "../../images/diary.jpeg";

export default function BebeDairy() {
  return (
    <div>
      <div className="relative flex justify-center items-center mt-20 mb-10">
        <img src={title} alt="title" className="w-80 h-10" />
        <h1 className="absolute bottom-4 text-5xl">Bebe Diary</h1>
      </div>
      <p className="text-center text-2xl mb-16">
        우리 아이의 성장을 "Bebe Diary"와 함께 기록하고 관리하세요.
        <br /> 소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄께요.
      </p>
      <img
        src={diary}
        alt="diary"
        className="w-1/2 mx-auto mb-12 rounded-lg border-2 border-red-200"
      />
      <div className="flex justify-center items-center">
        <a href="https://diary.mybebe.net/">
          👉🏻{" "}
          <span className="underline hover:text-red-400">
            베베 다이어리 홈페이지 바로가기
          </span>
        </a>{" "}
      </div>
    </div>
  );
}
