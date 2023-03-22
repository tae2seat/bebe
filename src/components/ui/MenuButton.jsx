import React from 'react';

export default function MenuButton({text}) {
    return (
        <div className='px-7 py-4 rounded-full bg-white text-#1E1E1E  hover:bg-brand1 hover:text-white'>
            <span className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center ' >{text}</span>
        </div>
    );
}

