import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black py-4 w-full">
      <div className="flex justify-around text-white pb-2">
        <div className="text-sm">
          <h2 className="font-bold py-1">Bebe Family</h2>
          <p>다이어리</p>
          <p>키트</p>
          <p>베베몰</p>
          <p>베베케어</p>
          <p>베베AI</p>
        </div>
        <div className="text-sm">
          <h2 className=" font-bold py-1">인재영입</h2>
          <p>직무 소개</p>
          <p>회사 지원하기</p>
        </div>
        <div className="text-sm">
          <h2 className=" font-bold py-1">고객센터</h2>
          <p>모바일 고객센터</p>
          <p>유선 고객센터</p>
        </div>
        <div className="text-sm">
          <h2 className="font-bold py-1">문의</h2>
          <p>사업 제휴</p>
          <p>광고 문의</p>
        </div>
      </div>

      <div className="text-end text-white text-xs my-2 mr-20">
        <h2>베베(주)</h2>
        <div>
          <p>사업자 등록번호: 000-00-00000</p>
          <p>대표이사: 김 혜 영 </p>
        </div>
        <p>https://diary.mybebe.net/</p>
      </div>
    </div>
  );
}
