import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const style = {
  homeContainer: `w-full h-screen `,
  headerContainer: `max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full `,
  headerFont: `text-2xl font-bold text-[#86c913]`,
  header2Font: `text-4xl sm:text-7xl font-bold text-[#E0EBE6] border-b-4 w-[144px] md:w-[290px] border-[#86c913]`,
  pFont: `text-[#DFF7F7] py-4 max-w-[700px]`,
  button: `group border-2 rounded-lg workbtn px-6 py-3 flex items-center hover:bg-[#86c913] hover:border-[#86c913]`,
  buttonSpan: `group-hover:rotate-90 duration-300`,
};

const Home = () => {
  return (
    <div name="home" className={style.homeContainer}>
      {/* Container */}
      <div className={style.headerContainer}>
        <p className={style.headerFont}>Hi, my name is</p>
        <h1 className={style.header2Font}>Forrest.</h1>
        <p className={style.pFont}>
          I'm a full stack developer. I have experience in agile environments
          and the ability to create capable, reliable, and mobile-first
          applications. Let's collaborate!
        </p>
        <div>
          <Link to="work" smooth={true} offset={50} duration={600}>
            <button className={style.button}>
              View Work
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
