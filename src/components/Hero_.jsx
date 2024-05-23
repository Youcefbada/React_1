import React from 'react';
import { ReactTyped } from "react-typed";
const Hero_= () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>GROWING WITH DATA ANALYTICS</p>
                <h1 className='text-4xl md:text-7xl sm:text-6xl font-blod'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-xl sm:text-xl text-xl font-bold pt-3' >Fast , Flexible Financing For :</p>
                    <ReactTyped className='md:text-xl sm:text-xl text-xl font-bold pt-3 pl-2 text-gray-400' strings={["BTB","BIT","USDT","SAS"]} typeSpeed={150} backSpeed={100} loop /> 
                </div>
                <p className='text-small pt-2 text-gray-400 font-bold'>Monitor your data analytics to inscrease revenue for BTB, BTC, & SAAS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-green-300 hover:font-bold'>Get Started</button>
            </div>
        </div>
    );
}

export default Hero_;
