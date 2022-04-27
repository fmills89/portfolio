import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen  text-[#E0EBE6]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#eab354]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className='pl-2'>Hi I'm Forrest, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='sm:text-right font-smooth pr-8 pl-2'>
                            Recent graduate from UTSA's six month coding Bootcamp. I always aspired to become a software developer,
                            taking the plung October 2021 I began my journey into code! Take the time go check out my work and skills.
                            If you like what you see, shoot me a message!
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About
