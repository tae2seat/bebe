import React, { useState } from 'react';
import TagButton from '../ui/TagButton'
import TagInfo from '../TagInfo'

export default function Service() {
    const [tagValue, setTagValue] = useState(1);
    return (
        <div className='flex flex-col items-center py-28'>
           <h1 className='text-center text-6xl font-bold my-12'>Service</h1>
           <div className='flex justify-center gap-10 p-10 ' >
               <TagButton bgColor={ tagValue === 1 ? "bg-brand1" : "bg-[#f95c58]/30" } text={"Bebe diary"} onClick={() => setTagValue(1)} />
               <TagButton bgColor={ tagValue === 2 ? "bg-brand1" : "bg-[#f95c58]/30" } text={"Bebe Care"} onClick={() => setTagValue(2)}/>
               <TagButton bgColor={ tagValue === 3 ? "bg-brand1" : "bg-[#f95c58]/30" } text={"Bebe mall"} onClick={() => setTagValue(3)}/>
           </div>
           <div className='h-[400px] py-28'>
               <TagInfo tagValue={tagValue} />
           </div>
        </div>
    );
}

