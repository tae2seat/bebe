import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className="h-screen flex flex-col items-center">
        <p>페이지의 주소를 찾을 수 없습니다.</p>
        <p>Home 버튼을 눌러주세요!</p>
        <button
          onClick={handleClick}
          className="w-32 h-10 rounded-xl  bg-brand7 text-white"
        >
          흠으로 되돌아가기
        </button>
      </div>
    </div>
  );
}
