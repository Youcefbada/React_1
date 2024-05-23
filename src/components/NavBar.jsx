import React , {useState} from 'react';
import {CiMenuBurger } from 'react-icons/ci'
import {IoMdClose} from 'react-icons/io'
const NavBar = () => {
    const [nav,setnav] = useState(true)
    const handlenav = () => {
        setnav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-white'>
            <h1 className='text-3xl font-bold text-[#00df9a]'>LuminaX</h1>
            <ul className='hidden md:flex'> 
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handlenav} className='block md:hidden'>
                {!nav ? <CiMenuBurger size={24}/> : <IoMdClose size={24}/>}
            </div> 
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 hidden' : 'fixed left-0 top-0 w-[30%] border-r border-r-gray-900 ease-in-out duration-700'}>
            <ul className='pt-24 pl-5 uppercase md:hidden'>
                <li className='p-4 border-b border-b-gray-600 hover:border-l hover:border-b-0'>Home</li>
                <li className='p-4 border-b border-b-gray-600 hover:border-l hover:border-b-0'>Company</li>
                <li className='p-4 border-b border-b-gray-600 hover:border-l hover:border-b-0'>Resources</li>
                <li className='p-4 border-b border-b-gray-600 hover:border-l hover:border-b-0'>About</li>
                <li className='p-4 border-b border-b-gray-600 hover:border-l hover:border-b-0 '>Contact</li>
            </ul>
        </div>
        </div>
    );
}

export default NavBar;
