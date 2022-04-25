import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className='w-screen h-[90px] z-10 bg-white drop-shadow-lg'>
            <div className='flex items-center items-baseline justify-start'>
                    <div>
                        <Link to='/'>
                            <p className='font-bold text-xl m-2 p-4'>FM</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/about'>
                            <p className='m-2 p-4'>About</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/projects'>
                            <p className='m-2 p-4'>Portfolio</p>
                        </Link>
                    </div>
         
            </div>
        </div>
    );
};

export default Header;