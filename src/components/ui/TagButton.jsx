import React from 'react';

export default function TagButton({text, onClick, bgColor}) {
    return (
        <p onClick={onClick} className={`cursor-pointer px-10 p-5 rounded-full shrink-0  font-bold text-3xl text-white ${bgColor}`}># {text}</p>
    );
}

