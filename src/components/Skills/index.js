import React from 'react';
import HTML from '../../assets/logos/html.png';
import CSS from '../../assets/logos/css.png';
import JavaScript from '../../assets/logos/javascript.png';
import Mongo from '../../assets/logos/mongo.png';
import Node from '../../assets/logos/node.png';
import ReactImg from '../../assets/logos/react.png';
import MySQL from '../../assets/logos/mysql.png';
import Tailwind from '../../assets/logos/tailwind.png';
import Heroku from '../../assets/logos/heroku.png';
import MongoAtlas from '../../assets/logos/atlas.png';
import Rest from '../../assets/logos/rest.png';
import Mongoose from '../../assets/logos/mongoose.png';

const style = {
  skillsScreen: `w-full md:h-screen py-40`,
  skillsContainer: `max-w-[1000px] text-center md:text-left mx-auto p-3 flex flex-col justify-center w-full h-full`,
  skillsHeader: `text-4xl font-bold text-center md:text-left w-[102px] boxDeco tracking-wide`,
  skillsP: `mt-2 boxDeco w-64 tracking-wide text-left`,
  skillGrid: `w-full grid grid-cols-2 sm:grid-cols-4 md:gap-2 text-center md:mt-16 mt-10 `,
  skillsCard: ` hover:scale-110 duration-500 rounded-xl p-6 m-2 md:m-6 bg-gradient-to-t from-slate-800/50 to-emerald-900/50`,
  imgContainer: ``,
  imgStyle: `w-20 mx-auto`,
  label: `my-4`,
};

const Skills = () => {
  return (
    <div name="skills" className={style.skillsScreen}>
      {/* Container */}
      <div className={style.skillsContainer}>
        <div>
          <p className={style.skillsHeader}>Skills</p>
          <p className={style.skillsP}>
            Technologies and languages I work with.
          </p>
        </div>
        <div className={style.skillGrid}>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={HTML} alt="html icon" />
              <p className={style.label}>HTML</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={CSS} alt="css icon" />
              <p className={style.label}>CSS</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={JavaScript} alt="JS icon" />
              <p className={style.label}>JAVASCRIPT</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={Mongo} alt="Mongodb icon" />
              <p className={style.label}>MONGODB</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={Node} alt="Node.js icon" />
              <p className={style.label}>NODE.JS</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={ReactImg} alt="React icon" />
              <p className={style.label}>REACT.JS</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={MySQL} alt="MySQL icon" />
              <p className={style.label}>MYSQL</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img
                className={style.imgStyle}
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className={style.label}>TAILWINDCSS</p>
            </div>
          </div>
          {/* <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img className={style.imgStyle} src={Heroku} alt="Heroku icon" />
              <p className={style.label}>HEROKU</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img
                className={style.imgStyle}
                src={MongoAtlas}
                alt="MongoAtlas icon"
              />
              <p className={style.label}>MONGO ATLAS</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img
                className={style.imgStyle}
                src={Rest}
                alt="Restful APIs icon"
              />
              <p className={style.label}>REST APIs</p>
            </div>
          </div>
          <div className={style.skillsCard}>
            <div className={style.imgContainer}>
              <img
                className={style.imgStyle}
                src={Mongoose}
                alt="Mongoose icon"
              />
              <p className={style.label}>MONGOOSE.JS</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
