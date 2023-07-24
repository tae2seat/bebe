import React, { useState } from "react";
import left from "../../images/left.png";
import right from "../../images/right.png";
import login from "../../images/mall/login.jpg";
import join from "../../images/mall/join.jpg";
import home from "../../images/mall/join.jpg";
import allProduct from "../../images/mall/allProduct.jpg";
import productDetail from "../../images/mall/productDetail.jpg";
import newProduct from "../../images/mall/newProduct.jpg";

export default function BebeMall() {
  const images = [login, join, home, allProduct, productDetail, newProduct];

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

  return (
    <div>
      <h1 className="text-center text-5xl py-20">Bebe Mall</h1>
      <p className="text-center">베베 몰 설명 </p>
      <div className="flex">
        <button onClick={clickLeft} className=" pl-32">
          <img src={left} alt="left" />
        </button>
        <div className="flex flex-col w-2/3 mx-auto border border-gray-500 my-40">
          <img src={images[currentImageIndex]} alt="images" />
        </div>
        <button onClick={clickRight}>
          <img src={right} alt="right" className="pr-32" />
        </button>
      </div>
    </div>
  );
}
