import React, {useState} from 'react';
import {Link} from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../../assets/logos/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#262b2b] to-[#5f787b] text-[#E0EBE6]'>
            <div>
                <Link to='home' smooth={true} offset={50} duration={500}>
                    <img className='fm' src={logo} alt='initials-logo image' style={{width: '100px'}} />
                </Link>
            </div>

     
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#262b2b] to-[#5f787b] flex flex-col justify-center items-center'}>

                <li  className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className='py-5 text-4xl'>
                <a className='' 
                    href={require('../../assets/files/Forrests-Resume.pdf')}>
                        Resume
                    </a>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#5f787b] to-[#eab354]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href='https://www.linkedin.com/in/forrest-mills-dev'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#5f787b] to-[#eab354]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href='https://github.com/fmills89'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#5f787b] to-[#eab354]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href='mailto:mills_forrest@yahoo.com'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#5f787b] to-[#eab354]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href={require('../../assets/files/Forrests-Resume.pdf')}>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;