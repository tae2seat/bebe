import React, { useEffect } from 'react';
import bebekit from '../images/bebekit.png';
import checkList from '../images/checkList.png';
import kitInfo from '../images/kitInfo.png';
import kitInfo2 from '../images/kitInfo2.png';
import box from '../images/box.png';
import wash from '../images/wash.png';
import product from '../images/product.png';

export default function BebeKit() {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    
    return (
        <div className='h-full text-cneter '>
            <div className='flex justify-center items-center'>
                <video width="full" height="720" autoPlay muted className='rounded-lg'>
                    <source src={'/videos/video.mp4'} type='video/mp4' />
                </video>
            </div>
            <div className='flex justify-center items-center py-8'>
                <h1 className='text-center text-5xl font-semibold py-10' >아이의 첫 시작을 Bebe가 응원합니다.</h1>
            </div>
            <div className='text-center py-10 leading-normal'>
                <h1>About Bebekit</h1>
                <span>"Bebekit"</span>
                <span>는 산모와 아이에게 필요한 용품과 정보가 20가지 들어있는 상자이자 브랜드 그 자체를 의미합니다.</span>
                <p>우리는 도움이 필요한 곳에 베베키트를 전달함으로써 아기에게 최소한의 환경을마련해주며, 세상에 내딛느 첫 걸음을 지지해주고 응원해주는 사회적 브랜드로 나아가고자 합니다.</p>
            </div> 
            <img src={bebekit} alt='kit'/>
            <div className='flex w-full h-[480px] bg-brand3'>
                <img src={kitInfo} alt='kitInfo' className='w-1/2 h-[480px]'/>  
                <img src={kitInfo2} alt='kitInfo2' className='w-1/2 h-[480px]'/>     
            </div>
            <div className='flex h-[480px] bg-brand3'>
                <img src={checkList} alt='checkList' className='w-1/2 h-[480px]'/>  
                <img src={box} alt='box' className='w-1/2 h-[480px]'/>     
            </div>
            <div className='flex h-[480px] bg-brand3'>
                <img src={wash} alt='wash' className='w-1/2 h-[480px]'/>  
                <img src={product} alt='product' className='w-1/2 h-[480px]'/>     
            </div>
            
            
                





           
        </div>
    );
}

