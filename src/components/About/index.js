import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-[#E0EBE6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#eab354]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              Hi, I'm Forrest. Nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="sm:text-right font-smooth pr-8">
              A recent graduate of UTSA's six-month coding Bootcamp. I have
              always aspired to become a software developer. Taking the plunge
              in October 2021, I began my journey into code! Please take a the
              time to check out my work and skills. If you like what you see,
              shoot me a message!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
