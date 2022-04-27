import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='w-full h-[80px] lg:hidden flex justify-around pt-5'>
            <ul className='flex text-[#E0EBE6]'>
                <li className='w-[60px] h-[60px] flex bg-[#eab354] opacity-75 hover:opacity-100'>
                    <a className='flex items-center w-full' 
                    href='https://www.linkedin.com/in/forrest-mills-dev'>
                        <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[60px] h-[60px] flex bg-[#eab354] opacity-75 hover:opacity-100'>
                    <a className='flex items-center w-full' 
                    href='https://github.com/fmills89'>
                        <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex bg-[#eab354] opacity-75 hover:opacity-100'>
                    <a className='flex items-center w-full' 
                      href='mailto:mills_forrest@yahoo.com'>
                        <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex bg-[#eab354] opacity-75 hover:opacity-100'>
                    <a className='flex items-center w-full' 
                    href={require('../../assets/files/Forrests-Resume.pdf')}>
                        <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
