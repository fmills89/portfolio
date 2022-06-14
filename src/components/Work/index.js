import React from 'react';
import Mern from '../../assets/img/mern-group-image.png';
import Shop from '../../assets/img/one-stop-shop-demo.gif';
import Brew from '../../assets/img/brew-me-image.jpg';
import Thoughts from '../../assets/img/deep-thoughts-image.png';
import Note from '../../assets/img/note-taker-image.png';
import Weather from '../../assets/img/weather-app-image.png';
import Run from '../../assets/img/hero-bg.jpeg';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-12">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#eab354]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work..</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Mern})` }}
            className="shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                <p className="text-center">Poke-Teams</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://evening-mountain-59213.herokuapp.com/">
                  <button className="text-center workbtn">Demo</button>
                </a>
                <a href="https://github.com/fmills89/poke-teams-builder">
                  <button className="text-center workbtn">Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Shop})` }}
            className="shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                <p className="text-center">One-Stop-Shop</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://group1-one-stop-shop.herokuapp.com/">
                  <button className="text-center workbtn">Demo</button>
                </a>
                <a href="https://github.com/fmills89/one-stop-shop">
                  <button className="text-center workbtn">Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Brew})` }}
            className="shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                <p className="text-center">Brew-Me</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://jessebubble.github.io/brew-me/">
                  <button className="text-center workbtn">Demo</button>
                </a>
                <a href="https://github.com/fmills89/brew-me">
                  <button className="text-center workbtn">Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Thoughts})` }}
            className="shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                <p className="text-center">Deep Thoughts</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://young-cliffs-17322.herokuapp.com/">
                  <button className="text-center workbtn">Demo</button>
                </a>
                <a href="https://github.com/fmills89/deep-thoughts">
                  <button className="text-center workbtn">Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Note})` }}
            className="shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                <p className="text-center">Express Note</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://ancient-retreat-03510.herokuapp.com/">
                  <button className="text-center workbtn">Demo</button>
                </a>
                <a href="https://github.com/fmills89/express-note-taker">
                  <button className="text-center workbtn">Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[##5f787b] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                <p className="text-center">Weather App</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://fmills89.github.io/weather-app/">
                  <button className="text-center workbtn">Demo</button>
                </a>
                <a href="https://github.com/fmills89/weather-app">
                  <button className="text-center workbtn">Repo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
