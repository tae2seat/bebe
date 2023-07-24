import React, { useState } from "react";
import left from "../../images/left.png";
import right from "../../images/right.png";
import navbar from "../../images/diary/navbar.jpg";
import bottom from "../../images/diary/bottom.jpg";
import newDiary from "../../images/diary/newDiary.jpg";
import diaryList from "../../images/diary/diaryList.jpg";
import profileEdit from "../../images/diary/profileEdit.jpg";
import babyProfile from "../../images/diary/babyProfile.jpg";
import profile from "../../images/diary/profile.jpg";
import login from "../../images/diary/login.jpg";
import register from "../../images/diary/register.jpg";

export default function BebeDairy() {
  const images = [
    register,
    login,
    profile,
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
      <p className="text-center">베베 다이어리 설명</p>
      <div className="flex">
        <button onClick={clickLeft} className=" pl-32">
          <img src={left} alt="left" />
        </button>
        <div className="flex flex-col w-2/3 mx-auto border border-gray-500 my-40">
          <img src={navbar} alt="navbar" />
          <div className="w-full  object-contain">
            <img src={images[currentImageIndex]} alt="images" />
          </div>
          <img src={bottom} alt="bottom" />
        </div>
        <button onClick={clickRight}>
          <img src={right} alt="right" className="pr-32" />
        </button>
      </div>
    </div>
  );
}
