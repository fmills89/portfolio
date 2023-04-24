import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../../assets/logos/logo.png';
import Footer from '../Footer';

const style = {
  headerContainer: `fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#048047]/50 to-[#13626a]/50`,
  navContainer: `hidden md:flex`,
  button: ` md:w-[100px] w-14 md:w-22 h-[30px] bg-teal-900 rounded-md m-2 text-xs md:text-sm hover:underline underline-offset-4`,
  mobileMenu: `absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#048047] to-[#13626a] flex flex-col justify-center items-center`,
  mobileLi: `py-5 text-4xl underline underline-offset-8`,
  socialIcons: `hidden lg:flex fixed flex-col top-[35%] left-0 `,
  outerUpperSocial: `socialPopouts rounded-tr-lg`,
  innerSocial: `socialPopouts`,
  outerBottomSocial: `socialPopouts rounded-br-lg`,
  fmLogo: `fm`,
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className={style.headerContainer}>
        <div>
          <Link to="home" smooth={true} offset={50} duration={500}>
            <img
              className={style.fmLogo}
              src={logo}
              alt="initials-logo"
              style={{ width: '100px' }}
            />
          </Link>
        </div>

        <div className={style.navContainer}>
          <Link to="about" smooth={true} offset={50} duration={500}>
            <button className={style.button}>About</button>
          </Link>
          {/* <Link to="about" smooth={true} offset={50} duration={500}>
            <button className={style.button}>About</button>
          </Link> */}
          <Link to="skills" smooth={true} offset={50} duration={500}>
            <button className={style.button}>Skills</button>
          </Link>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className={style.button}>Work</button>
          </Link>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            <button className={style.button}>Contact</button>
          </Link>
        </div>

        {/* hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : style.mobileMenu}>
          <li className={style.mobileLi}>
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={style.mobileLi}>
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={style.mobileLi}>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className={style.mobileLi}>
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className={style.mobileLi}>
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li className={style.mobileLi}>
            <a
              className=""
              href={require('../../assets/files/Forrest-Mills-Resume.pdf')}
            >
              Resume
            </a>
          </li>
        </ul>
        {/* Social icons */}
        <div className={style.socialIcons}>
          <ul>
            <li className={style.outerUpperSocial}>
              <a
                className="socialPopoutsAccent"
                href="https://www.linkedin.com/in/forrest-mills-dev"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className={style.innerSocial}>
              <a
                className="socialPopoutsAccent"
                href="https://github.com/fmills89"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className={style.innerSocial}>
              <a
                className="socialPopoutsAccent"
                href="mailto:mills_forrest@yahoo.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className={style.outerBottomSocial}>
              <a
                className="socialPopoutsAccent"
                href={require('../../assets/files/Forrest-Mills-Resume.pdf')}
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
