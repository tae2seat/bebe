import React, { useState } from "react";
import TagButton from "../ui/TagButton";
import TagInfo from "../TagInfo";

export default function Service() {
  const [tagValue, setTagValue] = useState(1);
  return (
    <div className="flex flex-col items-center text-center  py-28">
      <h1 className="text-5xl font-bold mb-16  ">Service</h1>
      <div className="flex gap-10 p-10">
        <TagButton
          bgColor={tagValue === 1 ? "bg-brand1" : "bg-[#f95c58]/30"}
          text={"Bebe diary"}
          onClick={() => setTagValue(1)}
        />
        <TagButton
          bgColor={tagValue === 2 ? "bg-brand1" : "bg-[#f95c58]/30"}
          text={"Bebe Kit"}
          onClick={() => setTagValue(2)}
        />
        <TagButton
          bgColor={tagValue === 3 ? "bg-brand1" : "bg-[#f95c58]/30"}
          text={"Bebe mall"}
          onClick={() => setTagValue(3)}
        />
      </div>
      <div className="text-center font-semibold text-3xl leading-normal mt-20">
        <TagInfo tagValue={tagValue} />
      </div>
    </div>
  );
}
