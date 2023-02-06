import React from 'react'
import Button from './Button'

const Hero = () => (
    <div className='flex flex-col justify-between items-center w-full py-20'>
        <h1 className='text-center flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Hi, I'm <br className='sm:block hidden'/> {"  "}
            <span className='text-gradient'>Kylene</span> <br className='sm:block hidden'/> {"  "}
            Welcome!
        </h1>
        <br />
        <h3 className='text-center flex-1 font-poppins font-light ss:text-[26px] text-[18px] text-white ss:leading-[80px] leading-[75px] py-10'>
            Website updates coming soon...
        </h3>
        <br />
        <div>{/* put the icons w links in a row here, map it - fuck it make buttons instead*/}
        <Button/> 
        </div>
    </div>
  )


export default Hero