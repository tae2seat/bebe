import React, { useEffect, useRef, useState } from "react";
import bebekit from "../images/bebekit.png";
import checkList from "../images/checkList.png";
import kitInfo from "../images/kitInfo.png";
import kitInfo2 from "../images/kitInfo2.png";
import box from "../images/box.png";
import wash from "../images/wash.png";
import product from "../images/product.png";
import right from "../images/right.png";
import left from "../images/left.png";
import banner from "../images/banner.png";

export default function BebeKit() {
  const images = [kitInfo, kitInfo2, checkList, box, wash, product];
  const descriptions = [
    "엄마를 위한 설명서",
    "아이를 위한 설명서 ",
    "Check List",
    "아기 쪽쪽이",
    "Hand soap",
    "아기 젖병",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <video width="full" height="720" muted={false} controls poster={banner}>
          <source src={"/videos/video.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="relative text-center">
        <div className="absolute top-10 left-10 text-xl leading-normal">
          <h1 className="text-center text-5xl font-semibold py-8">
            아이의 첫 시작을 Bebe가 응원합니다.
          </h1>
          <h1 className="text-3xl py-4">About Bebekit</h1>
          <span className=" text-red-400">"Bebekit"</span>는 산모와 아이에게
          필요한 용품과 정보가 20가지 들어있는 상자이자 브랜드 그 자체를
          의미합니다.
          <p>
            우리는 도움이 필요한 곳에 베베키트를 전달함으로써 아기에게 최소한의
            환경을마련해주며, 세상에 내딛는 첫 걸음을 지지해주고 응원해주는
            사회적 브랜드로 나아가고자 합니다.
          </p>
        </div>
        <img src={bebekit} alt="kit" />
      </div>
      <div className="flex flex-col mb-20">
        <h1 className="text-center text-3xl py-10">Bebe kit 제품들</h1>
        <div className="flex justify-center">
          <button onClick={clickLeft}>
            <img src={left} alt="left" />
          </button>
          <div className="flex flex-col items-center w-2/3">
            <img
              className="w-1/2 h-72 object-cover"
              src={images[currentImageIndex]}
              alt="image"
            />
            <p className="mt-4">{descriptions[currentImageIndex]}</p>
          </div>
          <button onClick={clickRight}>
            <img src={right} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
