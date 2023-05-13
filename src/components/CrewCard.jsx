import React, { useState }from 'react';

export default function CrewCard() {
    const crews = [
        {
            id: 1,
            name: '김혜영',
            job: 'Frontend 개발',
            info: '"늘 갈망하고 바보처럼 도전하라."',
        },
        {
            id: 2,
            name: '조현덕',
            job: 'Backtend 개발',
            info: '"베베에서 인생 팀을 만났다!"',
        },
        {
            id: 3,
            name: '김서영',
            job: 'BX 디자인',
            info: '"즐겁게 성장하자"',
        },
        {
            id: 4,
            name: '최은진',
            job: '총무, 회계',
            info: '"He who laughs, lasts!"',
        },
        {
            id: 5,
            name: '김지연',
            job: '제품 디자인',
            info: '"인생은 속도가 아니라 방향이다"',
        },
        {
            id: 6,
            name: '김용기',
            job: '마케팅',
            info: '"어디를 가든지 마음을 다해간다!"',
        },
        {
            id: 7,
            name: '강가혜',
            job: '인사관리',
            info: '"행복한 하루!"',
        },
    ]

    const crewsList = crews.map((crews) => 
        <div className='my-5 w-80 h-96' key={crews.id}>
            <div className='w-full h-3/4 rounded-t-md bg-slate-200'>
                <p className='flex justify-center items-end h-1/2'>이미지 준비중...</p>
            </div>
            <div className='w-full bg-gray-100 rounded-b-md gap-1 p-2 '>
                <div className='flex mt-2 '>
                    <p className=' text-3xl font-bold ml-3' >{crews.name}</p>
                    <p className='flex items-end text-sm ml-3'>{crews.job}</p>
                </div>                
                <p className='text-xl ml-3 my-2'>{crews.info}</p>
            </div>
        </div>
        );

        const [more, setMore] = useState(false);

        const onClickHandler = (() => {
            setMore(!more)
        });

    return (
        <div className='my-48 mx-40 '>
            <div className='grid grid-cols-3 gap-y-20 gap-x-10'>       
                {crewsList.splice(0,6)}
            </div>
            { more === true ? <div> {crewsList.splice(0,6)} </div> : null  }
            <div className='flex justify-center items-center my-20'>
                <button className=' bg-slate-100 rounded-full px-8 py-4 shrink-0 font-bold text-black-700 text-xl' onClick={onClickHandler}> 더 알아보기</button>
            </div>   
        </div>
    );
}

