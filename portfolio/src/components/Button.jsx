import React from "react";
import { iconLinks } from '../constants';

const Button = ({ styles }) => (
    <div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            { iconLinks.map((icon, index) => (
            <li
                key={icon.id}
                className={`font-poppins
                            font-normal
                            cursor-pointer
                            text-[16px] ${index == iconLinks.length - 1 ? 'mr-0' : 'mr-10'}
                            text-white
                            mr-10`}
            >
                <a href={`${icon.link}`} target="_blank" rel="noreferrer" type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    {icon.title}
                </a>
            </li>
            ))}
         </ul>

         <ul className='sm:hidden grid justify-items-center'>
         { iconLinks.map((icon, index) => (
            <li
                key={icon.id}
                className={`font-poppins
                            font-normal
                            cursor-pointer
                            place-items-center
                            text-[14px] 
                            text-white
                            py-3`}
            >
                <a href={`${icon.link}`} target="_blank" rel="noreferrer" type="button" className={`py-3 px-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    {icon.title}
                </a>
            </li>
            ))}
         </ul>
    </div>
);

export default Button;