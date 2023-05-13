import React, { useEffect } from 'react';


export default function BebeKit() {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    
    return (
        <div className='h-full text-cneter'>
            <div className='flex justify-center items-center p-2'>
            <video width="1360" height="720" autoPlay muted className=' rounded-lg'>
                    <source src={'/videos/video.mp4'} type='video/mp4' />
                </video>
            </div>
            <div className='flex justify-center items-center h-24'>
                <h1 className=' text-3xl' >아이의 첫 시작을 Bebe가 응원합니다.</h1>
            </div>
            <div>
                "베베키트"는 아이와 산모에게 필수적인 용품과 책자가 들어있는 상자입니다.<br/>
                우리는 모든 아기의 첫 시작을 응원하기 위해 베베키트를 필요로 하는 곳에 전달합니다.
            </div>
        </div>
    );
}

