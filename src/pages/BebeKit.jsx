import React, { useEffect, useState } from "react";
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
        <div className="absolute top-10 left-28 text-xl leading-normal">
          <h1 className="text-center text-5xl font-semibold py-8">
            아이의 첫 시작을 Bebe가 응원합니다.
          </h1>
          <h1 className="text-3xl py-4">About Bebekit</h1>
          <span className=" text-red-400">"Bebekit"</span>는 산모와 아이에게
          필요한 용품과 정보가 20가지 들어있는 상자이자 브랜드 그 자체를
          의미합니다.
          <p>
            우리는 도움이 필요한 곳에 베베키트를 전달함으로써 아기에게 최소한의
            환경을마련해주며, 세상에 내딛는 첫걸음을 지지해주고 응원해주는
            사회적 브랜드로 나아가고자 합니다.
          </p>
        </div>
        <img src={bebekit} alt="kit" />
      </div>
      <div className="w-3/4 mx-auto ">
        <h1 className="text-center text-4xl py-10">Bebe kit 제품 둘러보기</h1>
        <p className="text-center text-2xl py-2 mb-10 ">
          {descriptions[currentImageIndex]}
        </p>
        <div className="flex justify-between items-center gap-20 mb-20">
          <img
            src={left}
            alt="left"
            onClick={clickLeft}
            className="w-10 h-10 cursor-pointer"
          />
          <img
            className="object-cover h-[500px] rounded-md"
            src={images[currentImageIndex]}
            alt="images"
          />
          <img
            src={right}
            alt="right"
            onClick={clickRight}
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
