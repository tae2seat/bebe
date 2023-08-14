import React from "react";
import banner from "../images/banner.png";
import vector from "../images/vector.png";
import Color from "../components/homeCard/Color";
import Service from "../components/homeCard/Service";
import Icon from "../components/homeCard/Icon";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="banner" />
        <div className="absolute left-10 bottom-8">
          <div className="flex items-end gap-10 p-4">
            <p className="text-[86px] leading-snug font-bold text-white">
              we support
              <br />
              every baby's first step
            </p>
            <img className="animate-pulse mb-6" src={vector} alt="vector" />
            <Link
              className="rounded-full py-8 px-10 font-bold text-4xl bg-white text-gray-800 hover:text-red-400 text-brand shrink-0"
              to="/bebekit"
            >
              # Bebe kit
            </Link>
          </div>
        </div>
      </div>
      <Service />
      <div className="text-center py-28">
        <h1 className="text-6xl font-bold mb-24 ">Brand Value</h1>
        <p className="font-semibold text-4xl leading-normal">
          "베베"는 우리의 서비스를 누구나 잘 이해하고
          <br />
          가치를 공유하며, 나아가기를 희망합니다.
          <br />
          우리가 제시하는 <span className="text-brand1">아이콘</span>은 그것에
          대한 첫 제시이며,
          <br />더 쉽고 편한 시작이 되기를 바랍니다.
        </p>
      </div>
      <Icon />
      <div className="text-center py-28">
        <h1 className="text-6xl font-bold mb-24">Brand Color system</h1>
        <div className="font-semibold text-4xl leading-normal">
          "베베"의 <span className="text-brand1">컬러시스템</span>을 통해
          브랜드를 조금 더 명확하고
          <br />
          통일시켜 소비자의 혼란을 줄여줍니다.
        </div>
      </div>
      <Color />
    </div>
  );
}
