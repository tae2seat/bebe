import React, { useEffect } from "react";
import banner from "../images/banner.png";

export default function BebeKit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full p-2">
      <video
        width="full"
        height="720"
        muted={false}
        controls
        poster={banner}
        className=" rounded-2xl"
      >
        <source src={"/videos/video.mp4"} type="video/mp4" />
      </video>
      <p className="text-center text-2xl my-8">
        아이의 첫 시작을 Bebe가 응원합니다.
        <br />
        "Bebekit"는 산모와 아이에게 필요한 용품과 정보가 20가지 들어있는
        상자이자 브랜드 그 자체를 의미합니다.
      </p>
    </div>
  );
}
