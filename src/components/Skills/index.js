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

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen text-[#E0EBE6]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt:8 md:pt-32">
          <p className="text-4xl font-bold inline border-b-4 border-[#eab354]">
            Skills
          </p>
          <p className="py-4">Technologies I familar with..</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={HTML} alt="html icon" />
              <p className="my-4">HTML</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={CSS} alt="css icon" />
              <p className="my-4">CSS</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={Mongo} alt="Mongodb icon" />
              <p className="my-4">MONGODB</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={Node} alt="Node.js icon" />
              <p className="my-4">NODE.JS</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
              <p className="my-4">REACT.JS</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
              <p className="my-4">MYSQL</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img
                className="w-20 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-4">TAILWINDCSS</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img className="w-20 mx-auto" src={Heroku} alt="Heroku icon" />
              <p className="my-4">HEROKU</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img
                className="w-20 mx-auto"
                src={MongoAtlas}
                alt="MongoAtlas icon"
              />
              <p className="my-4">MONGO ATLAS</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img
                className="w-20 mx-auto"
                src={Rest}
                alt="Restful APIs icon"
              />
              <p className="my-4">REST APIs</p>
            </div>
          </div>
          <div className="shadow-md shadow-[grey] hover:scale-110 duration-500">
            <div className="p-4">
              <img
                className="w-20 mx-auto"
                src={Mongoose}
                alt="Mongoose icon"
              />
              <p className="my-4">MONGOOSE.JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
