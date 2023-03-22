import React from 'react';
import { Link } from 'react-router-dom';
import CrewCard from '../components/CrewCard';
import crewBanner from '../images/crew.png';

export default function Crew() {
    return (
        <div className=''>
            <div className='relative' >
                <img src={crewBanner} alt='banner'/>
                <div className='absolute flex items-center bottom-12 left-10 gap-5' >
                    <p className='shrink-0  text-7xl leading-snug font-bold text-left text-white'>
                        우리는 누구나 리더가 될 수 있고,<br/>
                        자유롭게 의견을 공유하며,<br/>
                        서로 좋은 영향을 주며 일합니다.
                    </p>
                </div>
            </div>
            <div className='my-32'>
                <h1 className='text-center text-7xl font-bold my-20'>Crew</h1>
                <p className='flex justify-center text-center font-semibold text-5xl'>
                    베베 크루들이 일하는 이야기<br/>
                </p>     
            </div>
            <CrewCard />
            <Link to='/crew/apply'>
                <div className='flex justify-center items-center'>
                <button className='text-bold text-3xl px-8 py-5 text-brand hover:text-black pb-20'>베베 크루 지원하기 </button>
            </div>
            </Link>
        </div>
    );
}

