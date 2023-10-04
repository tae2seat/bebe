import React, { useEffect, useState } from "react";
import bebekit from "../images/bebekit.png";
import banner from "../images/banner.png";

export default function BebeKit() {
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
        <img src={bebekit} alt="kit" />
      </div>
    </div>
  );
}
