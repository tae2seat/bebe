import React from 'react';

const circles = [
    {
        name: '#F95C58',
        color: 'brand1'        
    },
    {
        name: '#FFCDC3',
        color: 'brand2'
    },
    {
        name: '#F2F2F2',
        color: 'brand3'
    },
    {
        name: '#1E1E1E',
        color: 'brand4'

    },
    {
        name: '#FFF0F0',
        color: 'brand5'
    },
    {
        name: '#FFEDDF',
        color: 'brand6'
    },
    {
        name: '#FFA48A',
        color: 'brand7'
    },
    {
        name: '#A8E3F6',
        color: 'brand8'
    },
]

const circleColors = circles.map((circle) => {
    const textColor = circle.color === 'brand4' ? 'hover:text-white' : 'hover:text-black';
    const bgColor = `bg-${circle.color}`
    return (
      <div key={circle.name} 
        className={`flex justify-center items-center rounded-full w-36 h-36 my-8 ${bgColor} text-${circle.color} ${textColor} font-semibold`}> 
          {circle.name}
      </div>
    );
});


if(!circleColors) {
    <p>Loading...</p>
}

export default function Color() {
    return (
        <div className='grid grid-cols-4 justify-items-center mx-64 my-16 '>
            {circleColors}
        </div>
    );
}

