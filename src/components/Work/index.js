import React from 'react';
import Mern from '../../assets/img/mern-group-image.png';
import Forkify from '../../assets/img/forkify.png';
import Brew from '../../assets/img/brew-me-image.jpg';
import Weather from '../../assets/img/weather-app.png';
import Hookin from '../../assets/img/hookin.png';

const style = {
  workScreen: `w-full md:h-[1900px] my-60 `,
  workContainer: `max-w-[1000px] md:text-left text-center mx-auto flex flex-col justify-center w-full h-full px-3`,
  workHeader: `text-4xl font-bold text-center md:text-left w-24 boxDeco tracking-wide`,
  workP: `mt-2 p-2 text-left w-[280px] boxDeco`,
  workGrid: `grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-8`,
  imgContainer: `shadow-lg shadow-[##5f787b] rounded-md flex justify-center items-center mx-4 content-div`,
  projectTitle: `text-lg font-bold tracking-wider flex justify-center`,
  label: `p-2 m-4 text-center hover:scale-110 w-70 underline underline-offset-8`,
  buttonContainer: `pt-2 m-4 text-center`,
  workBtn: `w-20 font-base rounded-lg 
  shadow-lg shadow-green-800/50 transition ease-in-out bg-lime-600 hover:scale-110 
  hover:bg-teal-600/75 duration-400 px-4 py-1 m-2`,
  projectTile: `bg-gradient-to-t from-slate-800/50 to-emerald-900/50 rounded-lg my-6`,
};

const Work = () => {
  return (
    <div name="work" className={style.workScreen}>
      <div className={style.workContainer}>
        <div className="">
          <p className={style.workHeader}>Work</p>
          <p className={style.workP}>Check out some of my recent work.</p>
        </div>

        <div className={style.workGrid}>
          <div className={style.projectTile}>
            <span className={style.projectTitle}>
              <p className={style.label}>Poke-Teams</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Mern})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://afternoon-eyrie-17690.herokuapp.com/">
                <button className={style.workBtn}>Live</button>
              </a>
              <a href="https://github.com/fmills89/poke-teams-builder">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div className={style.projectTile}>
            <span className={style.projectTitle}>
              <p className={style.label}>Hookin-C</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Hookin})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://hookinc.netlify.app/">
                <button className={style.workBtn}>Live</button>
              </a>
              <a href="https://github.com/fmills89/hookin-c">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div className={style.projectTile}>
            <span className={style.projectTitle}>
              <p className={style.label}>Forkify</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Forkify})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://forkify-fmills89.netlify.app/">
                <button className={style.workBtn}>Live</button>
              </a>
              <a href="https://github.com/fmills89/forkify">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div className={style.projectTile}>
            <span className={style.projectTitle}>
              <p className={style.label}>Brew-Me</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Brew})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://fmills89.github.io/brew-me/">
                <button className={style.workBtn}>Live</button>
              </a>
              <a href="https://github.com/fmills89/brew-me">
                <button className={style.workBtn}>Repo</button>
              </a>
            </div>
          </div>
          <div className={style.projectTile}>
            <span className={style.projectTitle}>
              <p className={style.label}>Weather-App</p>
            </span>
            <div
              style={{ backgroundImage: `url(${Weather})` }}
              className={style.imgContainer}
            ></div>
            <div className={style.buttonContainer}>
              <a href="https://main--heroic-cactus-a367a9.netlify.app/">
                <button className={style.workBtn}>Live</button>
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
