import React from 'react';
import banner from '../images/banner.png';
import vector from '../images/vector.png';
import Color from '../components/homeCard/Color';
import Service from '../components/homeCard/Service';
import Icon from '../components/homeCard/Icon';
import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <div>
        <div className='relative'> 
            <div>
                <img src={banner} alt='banner' className='w-full' />
            </div>
            <div className='absolute flex justify-between w-full bottom-10 py-5 px-6'>
                <div className='flex items-center w-2/3'>
                    <p className='text-[86px] leading-snug font-bold text-white  pl-5 shrink-0'>
                        we support<br/>
                        every baby's first step
                    </p>
                </div>
                <div className='flex items-end w-1/3' >
                    <div className=' relative w-2/5'>
                        <img src={vector} alt='vector' className=' absolute bottom-6 right-5'/>   
                    </div>
                    <div className='flex justify-center w-3/5'>
                        <Link to='/bebekit'>
                            <p className='rounded-full py-8 px-10 font-bold text-4xl bg-white text-brand shrink-0'># Bebe kit</p> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Service />
        <div className='flex flex-col items-center py-10'>
            <h1 className='text-center text-6xl font-bold my-6' >Brand Value</h1>
            <p className='text-center  py-20 font-semibold text-4xl leading-normal'>
                "베베"는 우리의 서비스를 누구나 잘 이해하고<br/>
                가치를 공유하며, 나아가기를 희망합니다.<br/>
                우리가 제시하는 아이콘은 그것에 대한 첫 제시이며,<br/>
                더 쉽고 편한 시작이 되기를 바랍니다. 
            </p>
        </div>
        <Icon />
        <div className=''>
            <div>
                <h1 className='text-center text-6xl font-bold my-20'>Brand Color system</h1>
                <div className='flex justify-center text-center font-semibold text-4xl leading-normal'>
                    "베베"의 컬러시스템을 통해 브랜드를 조금 더 명확하고<br/>
                    통일시켜 소비자의 혼란을 줄여줍니다.
                </div>
            </div>
            <div className=''>
                <Color />
            </div>
        </div>
    </div>
    )
}

