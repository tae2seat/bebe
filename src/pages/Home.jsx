import React from "react";
import banner from "../images/banner.png";
import vector from "../images/vector.png";
import Color from "../components/homeCard/Color";
import Service from "../components/homeCard/Service";
import Icon from "../components/homeCard/Icon";
import { Link } from "react-router-dom";
import BrandValue from "../components/homeCard/BrandValue";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="banner" />
        <div className="absolute left-3 bottom-8">
          <div className="flex items-end gap-8 p-4">
            <p className="text-[86px] leading-snug font-bold text-white">
              we support
              <br />
              every baby's first step
            </p>
            <img className="animate-pulse mb-6" src={vector} alt="vector" />
            <Link
              className="rounded-full py-8 px-10 font-bold text-4xl bg-white text-gray-800  hover:text-red-400 text-brand shrink-0"
              to="/bebekit"
            >
              # Bebe kit
            </Link>
          </div>
        </div>
      </div>
      <Service />
      <BrandValue />
      <Icon />
      <div className="text-center py-28">
        <h1 className="text-6xl font-bold mb-16 ">Brand Color system</h1>
        <div className="font-semibold text-4xl leading-normal">
          "베베"의 컬러시스템을 통해 브랜드를 조금 더 명확하고
          <br />
          통일시켜 소비자의 혼란을 줄여줍니다.
        </div>
      </div>
      <Color />
    </div>
  );
}
