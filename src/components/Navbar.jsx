import React from 'react';
import MenuButton from '../components/ui/MenuButton'
import mainLogo from '../images/main-logo.png';
import { CiCircleMore } from 'react-icons/ci';
import { BsGlobe } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header className='flex justify-between w-full h-24' >
            <div className=' flex justify-center items-center w-1/4 p-2'>
                <Link to='/' >
                    <img src={mainLogo} alt='logo' className='w-52 p-1' />
                </Link>
            </div>
            <nav className='flex justify-around items-center w-1/2 py-2'>
                <Link to='/'>
                    <MenuButton text={"Home"} />
                </Link>
                <Link to='/bebeFamily'>
                    <MenuButton text={"Bebe Family"} />
                </Link>
                <Link to='/crew'  >
                    <MenuButton text={"Crew"} />
                </Link>
            </nav>
            <div className='flex justify-center items-center w-1/4 p-2'>           
            <button className='w-16 h-16 flex items-center justify-center text-4xl shrink-0 ' >
                    <CiCircleMore />
                </button>
                <button className='w-16 h-16 flex items-center justify-center text-3xl shrink-0 ' >
                    <BsGlobe />
                </button>
            </div>
        </header>
    );
}

