import React from 'react';
import comingsoon from "../../assets/comingsoon.png"

const GiftPage = () => {
  return (
    <div className='px-4 pt-32 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]'>
        <div className='flex flex-col items-center justify-center'>
            <div className='md:h-[680px]'>
                <img className='md:h-full' src={comingsoon} alt={comingsoon} />
            </div>
            <div>
                <ul className='comingsoon'>
                    <li>C</li>
                    <li>O</li>
                    <li>M</li>
                    <li>I</li>
                    <li>N</li>
                    <li>G</li>
                    <li>S</li>
                    <li>O</li>
                    <li>O</li>
                    <li>N</li>
                    <li>o</li>
                    <li>o</li>
                    <li>o</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GiftPage