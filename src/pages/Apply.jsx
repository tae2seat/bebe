import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Apply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectFile, setSelectFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    alert("지원이 완료되었습니다. 지원해주셔서 감사합니다.");
  };

  return (
    <div className=" flex flex-col items-center py-20">
      <h1 className="text-6xl font-bold my-10">다음 동료는 누구?</h1>
      <p className="font-semibold text-4xl leading-normal py-8 ">
        베베 크루는 더 나은 세상을 만들고 행복을 나누기 위해 모이게 되었습니다.
        <br />
        우리의 가치에 공감하고 같은 목표를 향해 달릴 동료를 기다리고 있습니다.
      </p>
      <form className="flex flex-col w-1/3 gap-4 mt-10 border border-blue-300 rounded-lg p-10">
        <p className="text-center text-2xl">지원서</p>
        <input
          className="h-10 pl-3 text-lg"
          {...register("name", {
            required: "이름은 필수 입력 사항입니다.",
          })}
          type="text"
          placeholder="이름"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          className="h-10 px-3 text-lg"
          {...register("birthDate", {
            required: "생년월일은 필수 입력 사항입니다.",
          })}
          type="date"
          placeholder="생년월일"
        />
        {errors.birthDate && <p>{errors.birthDate.message}</p>}
        <input
          className="h-10 pl-3 text-lg"
          {...register("address", {
            required: "주소는 필수 입력 사항입니다.",
          })}
          type="text"
          placeholder="주소"
        />
        {errors.address && <p>{errors.address.message}</p>}
        <input
          className="h-10 pl-3 text-lg"
          {...register("email", {
            required: "이메일은 필수 입력 사항입니다.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "유효한 이메일 주소를 입력해주세요.",
            },
          })}
          type="email"
          placeholder="이메일"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          className="h-10 pl-3 text-lg"
          {...register("phone", {
            required: "전화번호는 필수 입력 사항입니다.",
          })}
          type="text"
          placeholder="전화번호"
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        <div className="border-b bg-none border-gray-200 outline-none px-1 ">
          <span className="text-lg mb-4">첨부파일 추가하기</span>
          <input
            className="truncate mt-4"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex justify-center">
          <select
            className=" bg-slate-50 text-xl text-center rounded-3xl px-4 py-2 my-10"
            {...register("dept", {
              required: "지원부서는 필수 선택 사항입니다.",
            })}
            onFocus={(e) => e.target.classList.add("outline-none")}
            onBlur={(e) => e.target.classList.remove("outline-none")}
          >
            <option value="">어느 부서에 지원할 건지 선택해주세요!</option>
            <option value="design">HR Team (인사팀)</option>
            <option value="developer">Planning Team (기획팀)</option>
            <option value="여자">R&D Team (연구개발팀)</option>
            <option value="여자">Sales Team (영업팀)</option>
            <option value="여자">
              Customer Satisfaction Team (고객만족팀)
            </option>
            <option value="여자">FE Dev Team (프론트엔드 개발팀)</option>
            <option value="여자">BE Dev Team (백엔드 개발팀)</option>
          </select>
          {errors.dept && (
            <p className="text-xs text-gray-600">{errors.dept.message}</p>
          )}{" "}
        </div>
        <button
          onClick={handleClick}
          className="mx-28 py-2 rounded-full bg-white text-[#1E1E1E] border border-brand2 hover:bg-brand1 hover:text-white"
        >
          지원서 제출하기
        </button>
      </form>
    </div>
  );
}
