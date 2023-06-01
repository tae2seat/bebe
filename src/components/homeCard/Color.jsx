import React from 'react';

export default function Color() {
    const circles = [
        {
            name: '#F95C58',
            bgolor: 'bg-brand1',
            hoverText: 'hover:text-black',
            text: 'text-brand1'
        },
        {
            name: '#FFCDC3',
            bgolor: 'bg-brand2',
            hoverText: 'hover:text-black',
            text: 'text-brand2'
        },
        {
            name: '#F2F2F2',
            bgolor: 'bg-brand3',
            hoverText: 'hover:text-black',
            text: 'text-brand3'
        },
        {
            name: '#1E1E1E',
            bgolor: 'bg-brand4',
            hoverText: 'hover:text-white',
            text: 'text-brand4'
    
        },
        {
            name: '#FFF0F0',
            bgolor: 'bg-brand5',
            hoverText: 'hover:text-black',
            text: 'text-brand5'
        },
        {
            name: '#FFEDDF',
            bgolor: 'bg-brand6',
            hoverText: 'hover:text-black',
            text: 'text-brand6'
        },
        {
            name: '#FFA48A',
            bgolor: 'bg-brand7',
            hoverText: 'hover:text-black',
            text: 'text-brand7'
        },
        {
            name: '#A8E3F6',
            bgolor: 'bg-brand8',
            hoverText: 'hover:text-black',
            text: 'text-brand8'
        },
    ]

    return (
        <div className='grid grid-cols-4 justify-items-center mx-64 my-16 '>
            {
                circles.map((circle, idx) => {
                    const className = `flex justify-center items-center rounded-full w-36 h-36 my-8 ${circle.bgolor} ${circle.text} ${circle.hoverText} font-semibold`
                    return (
                        <div key={idx} 
                            className={className}> 
                            {circle.name}
                        </div>
                    );
                })
            }
        </div>
    );
}

