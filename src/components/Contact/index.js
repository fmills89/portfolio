import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
            <form method="POST" action='https://getform.io/f/ca1c67bd-b15e-40b3-b050-258b8bb8253d' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#eab354] text-[#E0EBE6]'>Contact</p>
                    <p className='py-4'>Submit the form below or send me and email - mills_forrest@yahoo.com</p>
                </div>
                <input className='p-2 bg-[#e0ebe6] rounded-md' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#e0ebe6] rounded-md' type='email' placeholder='Email' name='email' />
                <textarea className='p-2 bg-[#e0ebe6] rounded-md' name='message' rows="10" placeholder='Message'></textarea>
                <button className='text-[#e0ebe6] border-2 rounded-lg 
                    shadow-lg shadow-yellow-500/50 opacity-100 hover:opacity-75
                    transition ease-in-out delay-150 bg-[#eab354] hover:scale-110 
                    hover:bg-[#5f787b] duration-300 px-4 py-3 my-8 mx-auto flex items-center'>
                    Send 🛸
                </button>
            </form>
            
        </div>
    )
}

export default Contact;
