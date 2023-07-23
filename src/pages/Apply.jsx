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

  //   const apply = async (data) => {
  //     try {
  //       const response = await axios.post("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     alert("지원 완료!");
  //   };

  return (
    <div className=" flex flex-col px-24 py-10 text-start">
      <h1 className="text-6xl font-bold py-12">다음 동료는 누구?</h1>
      <p className="font-semibold text-4xl leading-normal py-8 ">
        베베 크루는 더 나은 세상을 만들고 행복을 나누기 위해 모이게 되었습니다.
        <br />
        우리의 가치에 공감하고 같은 목표를 향해 달릴 동료를 기다리고 있습니다.
      </p>
      <p className="mt-20 text-lg animate-pulse text-brand4 py-2">
        베베지원서 작성하기
      </p>

      <form className=" p-20">
        <div className="flex justify-start gap-10 mb-16 ">
          <img className="w-36 h-48" />
          <div className="flex flex-col justify-center gap-2 w-1/3">
            <input
              className="text-lg bg-none border-b border-gray-200 focus:border-brand2 outline-none px-1"
              {...register("name", {
                required: "이름은 필수 입력 사항입니다.",
              })}
              type="text"
              placeholder="이름"
            />
            {errors.name && <p>errors.name.message</p>}
            <input
              className="text-lg bg-none border-b border-gray-200 focus:border-brand2 outline-none px-1"
              {...register("birthDate", {
                required: "생년월일은 필수 입력 사항입니다.",
              })}
              type="date"
              placeholder="생년월일"
            />
            {errors.birthDate && <p>errors.birthDate.message</p>}
            <input
              className="text-lg bg-none border-b border-gray-200 focus:border-brand2 outline-none px-1"
              {...register("address", {
                required: "주소는 필수 입력 사항입니다.",
              })}
              type="text"
              placeholder="주소"
            />
            {errors.address && <p>errors.address.message</p>}
            <input
              className="text-lg bg-none border-b border-gray-200 focus:border-brand2 outline-none px-1"
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
            {errors.email && <p>errors.email.message</p>}
            <input
              className="text-lg bg-none border-b border-gray-200 focus:border-brand2 outline-none px-1"
              {...register("phone", {
                required: "전화번호는 필수 입력 사항입니다.",
              })}
              type="text"
              placeholder="전화번호"
            />
          </div>
        </div>
        <div className="border-b bg-none border-gray-200 outline-none px-1 mb-10">
          <span className="text-sm p-2">첨부파일 추가하기</span>
          <input
            className="p-2 truncate"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex flex-col justify-center items-center py-10">
          <select
            className="w-2/3 bg-slate-50 text-2xl text-center rounded-3xl px-4 py-2 mt-20"
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
          )}
          <button className="px-7 py-4 rounded-full bg-white text-[#1E1E1E] border border-brand2 hover:bg-brand1 hover:text-white mt-16">
            지원서 제출하기
          </button>
        </div>
      </form>
      <p className="text-center mt-10">
        지원해 주셔서 감사합니다.
        <br />
        예비 베베크루원들 우리 꼭 만나요~!
      </p>
    </div>
  );
}
