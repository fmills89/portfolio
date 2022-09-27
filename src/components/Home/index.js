import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl font-bold text-[#86c913]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#E0EBE6]">
          Forrest Mills
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#E0EBE6]">
          I'm a full stack developer..
        </h2>
        <p className="text-[#DFF7F7] py-4 max-w-[700px]">
          I have experience in agile environments and the ability to create
          capable, reliable, and mobile-first applications. Let's collaborate!
        </p>
        <div>
          <Link to="work" smooth={true} offset={50} duration={600}>
            <button className=" group border-2 rounded-lg workbtn px-6 py-3 flex items-center hover:bg-[#86c913] hover:border-[#86c913]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
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
