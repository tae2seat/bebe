import React, { useState } from "react";
import left from "../../images/left.png";
import right from "../../images/right.png";
import navbar from "../../images/diary/navbar.jpg";
import bottom from "../../images/diary/bottom.jpg";
import newDiary from "../../images/diary/newDiary.jpg";
import diaryList from "../../images/diary/diaryList.jpg";
import profileEdit from "../../images/diary/profileEdit.jpg";
import babyProfile from "../../images/diary/babyProfile.jpg";
import login from "../../images/diary/login.jpg";
import register from "../../images/diary/register.jpg";

export default function BebeDairy() {
  const images = [
    register,
    login,
    babyProfile,
    profileEdit,
    newDiary,
    diaryList,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const clickLeft = (e) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const clickRight = (e) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <h1 className="text-center text-5xl py-20">Bebe Diary</h1>
      <p className="text-center text-2xl mb-16">
        우리 아이의 성장을 "Bebe Diary"와 함께 기록하고 관리하세요.
        <br /> 소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄께요.
      </p>
      <div className="flex justify-between items-center mb-40 px-10">
        <img src={left} alt="left" onClick={clickLeft} />
        <div className="flex flex-col w-[1080px]  border border-gray-700">
          <img src={navbar} alt="navbar" />
          <img
            src={images[currentImageIndex]}
            alt="images"
            className=" h-[600px]"
          />
          <img src={bottom} alt="bottom" />
        </div>
        <button>
          <img src={right} alt="right" onClick={clickRight} />
        </button>
      </div>
    </div>
  );
}
