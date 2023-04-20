import React from 'react';

const style = {
  aboutScreen: `w-full h-screen`,
  aboutSection: `flex flex-col justify-center items-center w-full h-full`,
  aboutHeaderContainer: `max-w-[1000px] w-full pb-8 pl-4 `,
  aboutHeader: `text-4xl font-bold inline border-b-4 border-[#86c913]`,
  aboutGrid: `max-w-[1000px] w-full grid sm:grid-cols-1 items-center gap-8 px-4`,
  leftCol: `sm:text-left text-xl font-bold`,
  rightCol: `sm:text-left font-bold text-lg pr-8 w-2/3`,
};

const About = () => {
  return (
    <div name="about" className={style.aboutScreen}>
      <div className={style.aboutSection}>
        <div className={style.aboutHeaderContainer}>
          <p className={style.aboutHeader}>About</p>
        </div>
        <div className={style.aboutGrid}>
          {/* <div className={style.leftCol}>
            <p className="">
              Hi, I'm Forrest. Nice to meet you. Please take a look around.
            </p>
          </div> */}
          <div>
            <p className={style.rightCol}>
              I have always aspired to become a software developer. Taking the
              plunge in October 2021, I began my journey into code! Please take
              the time to check out my work and skills. If you like what you
              see, shoot me a message!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
