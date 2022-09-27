import React from 'react';
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ca1c67bd-b15e-40b3-b050-258b8bb8253d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#86c913] text-[#E0EBE6]">
            Contact
          </p>
          <p className="pt-4 text-[#E0EBE6]">
            Fill out the form below to reach me. Or reach me by email:
            mills_forrest@yahoo.com
          </p>
        </div>
        <input
          className="p-2 bg-[#e0ebe6] rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#e0ebe6] rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#e0ebe6] rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="workbtn flex items-center mx-auto mt-8">
          Send 🛸
        </button>
      </form>
    </div>
  );
};

export default Contact;
