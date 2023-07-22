/* eslint-disable-next-line no-unused-vars */
import React from "react";

import ICON_01 from "../../images/ICON_01.png";
import ICON_02 from "../../images/ICON_02.png";
import ICON_03 from "../../images/ICON_03.png";
import ICON_04 from "../../images/ICON_04.png";
import ICON_05 from "../../images/ICON_05.png";
import ICON_06 from "../../images/ICON_06.png";
import ICON_07 from "../../images/ICON_07.png";
import ICON_08 from "../../images/ICON_08.png";
import ICON_09 from "../../images/ICON_09.png";
import ICON_10 from "../../images/ICON_10.png";
import ICON_11 from "../../images/ICON_11.png";
import ICON_12 from "../../images/ICON_12.png";
import ICON_13 from "../../images/ICON_13.png";
import ICON_14 from "../../images/ICON_14.png";
import ICON_15 from "../../images/ICON_15.png";
import ICON_16 from "../../images/ICON_16.png";
import ICON_17 from "../../images/ICON_17.png";
import ICON_18 from "../../images/ICON_18.png";
import ICON_19 from "../../images/ICON_19.png";
import ICON_20 from "../../images/ICON_20.png";
import ICON_21 from "../../images/ICON_21.png";
import ICON_22 from "../../images/ICON_22.png";
import ICON_23 from "../../images/ICON_23.png";
import ICON_24 from "../../images/ICON_24.png";
import ICON_25 from "../../images/ICON_25.png";
import ICON_26 from "../../images/ICON_26.png";
import ICON_27 from "../../images/ICON_27.png";
import ICON_28 from "../../images/ICON_28.png";
import ICON_29 from "../../images/ICON_29.png";
import ICON_30 from "../../images/ICON_30.png";

const icons = [
  {
    name: "젖병",
    src: ICON_01,
  },
  {
    name: "귀저귀",
    src: ICON_02,
  },
  {
    name: "온도계",
    src: ICON_03,
  },
  {
    name: "물온도",
    src: ICON_04,
  },
  {
    name: "임산부",
    src: ICON_05,
  },
  {
    name: "다이어리",
    src: ICON_06,
  },
  {
    name: "목욕",
    src: ICON_07,
  },
  {
    name: "아기",
    src: ICON_08,
  },
  {
    name: "꿈나라 아기",
    src: ICON_09,
  },
  {
    name: "우는 아기",
    src: ICON_10,
  },
  {
    name: "이유식",
    src: ICON_11,
  },
  {
    name: "놀이",
    src: ICON_12,
  },
  {
    name: "턱받이",
    src: ICON_13,
  },
  {
    name: "분유",
    src: ICON_14,
  },
  {
    name: "가족",
    src: ICON_15,
  },
  {
    name: "모유수유",
    src: ICON_16,
  },
  {
    name: "모자",
    src: ICON_17,
  },
  {
    name: "손톱 가위",
    src: ICON_18,
  },
  {
    name: "가제 손수건",
    src: ICON_19,
  },
  {
    name: "튼살 크림",
    src: ICON_20,
  },
  {
    name: "침대",
    src: ICON_21,
  },
  {
    name: "양말",
    src: ICON_22,
  },
  {
    name: "신발",
    src: ICON_23,
  },
  {
    name: "주사기",
    src: ICON_24,
  },
  {
    name: "외출복",
    src: ICON_25,
  },
  {
    name: "실내복",
    src: ICON_26,
  },
  {
    name: "주의 사항",
    src: ICON_27,
  },
  {
    name: "공갈 젖꼭지",
    src: ICON_28,
  },
  {
    name: "티슈",
    src: ICON_29,
  },
  {
    name: "손씻기",
    src: ICON_30,
  },
];

export default function Icon() {
  const iconList = icons.map((icon) => (
    <div
      key={icon.name}
      className="flex flex-col justify-center items-center gap-1 w-28 h-28 bg-slate-100 rounded-full transition-transform hover:scale-110 cursor-pointer"
    >
      <img src={icon.src} alt={icon.name} className="w-14 h-14" />
      <p className="text-sm font-semibold">{icon.name}</p>
    </div>
  ));

  return (
    <div className="w-2/3 mx-auto grid grid-cols-6 place-items-center gap-y-6">
      {iconList}
    </div>
  );
}
