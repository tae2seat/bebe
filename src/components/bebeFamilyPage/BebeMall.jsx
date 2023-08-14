import React, { useState } from "react";
import left from "../../images/left.png";
import right from "../../images/right.png";
import login from "../../images/mall/login.jpg";
import join from "../../images/mall/join.jpg";
import home from "../../images/mall/home.jpg";
import cart from "../../images/mall/cart.jpg";
import edit from "../../images/mall/cart.jpg";
import detail from "../../images/mall/detail.jpg";
import profile from "../../images/mall/profile.jpg";
import products from "../../images/mall/products.jpg";
import newProduct from "../../images/mall/newProduct.jpg";

export default function BebeMall() {
  const images = [
    login,
    join,
    home,
    products,
    detail,
    newProduct,
    cart,
    edit,
    profile,
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

  return (
    <div>
      <h1 className="text-center text-5xl py-20">Bebe Mall</h1>
      <p className="text-center text-2xl mb-16">
        아이 용품 "Bebe Mall"에서 구입하세요. Best Products, High Quality
      </p>
      <div className="flex justify-between items-center mb-40">
        <img src={left} alt="left" onClick={clickLeft} className="w-12 h-12" />
        <img
          src={images[currentImageIndex]}
          alt="images"
          className="w-[1280px] h-[700px] border border-gray-700"
        />
        <img
          src={right}
          alt="right"
          onClick={clickRight}
          className="w-12 h-12"
        />
      </div>
    </div>
  );
}
