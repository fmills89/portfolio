import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const style = {
  homeContainer: `w-full h-screen mb-80`,
  headerContainer: `max-w-[1000px] h-full mx-auto pl-3 flex flex-col justify-center tracking-wide leading-relaxed`,
  headerFont: `text-2xl font-bold text-[#86c913] p-1 box-decoration-clone w-48`,
  header2Font: `text-5xl sm:text-7xl font-bold w-[190px] md:w-[290px] border-[#86c913] border-b-4`,
  pFont: `py-4 max-w-[800px] font-bold md:w-2/3`,
  button: `group shadow-xl rounded-lg px-3 py-2 mt-4 md:mt-1 flex items-center text-slate-900/75 font-bold bg-[#86c913] hover:bg-teal-600/75 ring-2 ring-slate-500/75 hover:ring-[#86c913]`,
  buttonSpan: `group-hover:rotate-90 duration-300`,
  // customContainer: `border-4 border-slate-800/75 w-80 flex flex-col justify-center p-2 bg-lime-500/75 shadow-xl rounded`,
};

const Home = () => {
  return (
    <div name="about" className={style.homeContainer}>
      {/* Container */}
      <div className={style.headerContainer}>
        <p className={style.headerFont}>Hi, my name is</p>
        <h1 className={style.header2Font}>Forrest.</h1>

        <p className={style.pFont}>
          I'm a full stack developer. I have experience in agile environments
          and the ability to create capable, reliable, and mobile-first
          applications. I have always aspired to become a software developer.
          Taking the plunge in October 2021, I began my journey into code!
          Please take the time to check out my work and skills. If you like what
          you see, shoot me a message! Let's collaborate!
        </p>
        <div>
          <Link to="work" smooth={true} offset={50} duration={600}>
            <button className={style.button}>
              Projects
              <span className={style.buttonSpan}>
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
