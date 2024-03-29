import React from "react";

export default function TagInfo({ tagValue }) {
  switch (tagValue) {
    case 1:
      return (
        <p className="">
          우리 아이의 성장을 "Bebe Diary"와 함께 기록하고 관리하세요.
          <br />
          소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄게요.
        </p>
      );
    case 2:
      return (
        <p className="">
          "Bebe Kit"는 아이와 산모에게 필수적인 용품과 책자가 들어있는
          상자입니다.
          <br />
          우리는 모든 아기의 첫시작을 응원하기 위해 베베키트를 필요로 하는 곳에
          전달합니다.
        </p>
      );
    case 3:
      return (
        <p className="">
          아이 용품 "Bebe Mall"에서 구입하세요. <br />
          Best Products, High Quality
        </p>
      );
    default:
      return (
        <p className="">
          우리 아이의 성장을 "베베 다이어리"와 함께 기록하고 관리하세요.
          <br />
          소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄께요.
        </p>
      );
  }
}
