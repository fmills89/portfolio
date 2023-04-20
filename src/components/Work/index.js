import React from 'react';
import Mern from '../../assets/img/mern-group-image.png';
import Forkify from '../../assets/img/forkify.png';
import Brew from '../../assets/img/brew-me-image.jpg';
import Weather from '../../assets/img/weather-app.png';

const style = {
  workScreen: `w-full md:h-screen my-60`,
  workContainer: `max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full px-3`,
  workHeader: `text-4xl font-bold inline border-b-4 border-[#86c913]`,
  workGrid: `grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-8`,
  imgContainer: `shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div`,
  projectTitle: `text-lg font-bold pb-10 tracking-wider`,
  label: `pb-2 text-slate-900/75 `,
  buttonContainer: `pt-2 text-center text-slate-900/75 `,
  workBtn: `font-bold text-lg rounded-lg 
  shadow-lg shadow-green-500/50 transition ease-in-out bg-[#86c913] hover:scale-110 
  hover:bg-stone-900/75 duration-400 px-4 py-3 m-2`,
};

const Work = () => {
  return (
    <div name="work" className={style.workScreen}>
      <div className={style.workContainer}>
        <div className="">
          <p className={style.workHeader}>Work</p>
          <p className="py-6">Check out some of my recent work.</p>
        </div>

        <div className={style.workGrid}>
          <div>
            <span className={style.projectTitle}>
              <p className={style.label}>Poke-Teams</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Mern})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://afternoon-eyrie-17690.herokuapp.com/">
                <button className={style.workBtn}>Demo</button>
              </a>
              <a href="https://github.com/fmills89/poke-teams-builder">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div>
            <span className={style.projectTitle}>
              <p className={style.label}>Forkify</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Forkify})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://forkify-fmills89.netlify.app/">
                <button className={style.workBtn}>Demo</button>
              </a>
              <a href="https://github.com/fmills89/forkify">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div>
            <span className={style.projectTitle}>
              <p className={style.label}>Brew-Me</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Brew})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://fmills89.github.io/brew-me/">
                <button className={style.workBtn}>Demo</button>
              </a>
              <a href="https://github.com/fmills89/brew-me">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div>
            <span className={style.projectTitle}>
              <p className={style.label}>Weather-App</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Weather})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://main--heroic-cactus-a367a9.netlify.app/">
                <button className={style.workBtn}>Demo</button>
              </a>
              <a href="https://github.com/fmills89/weather-app">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
