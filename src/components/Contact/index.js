import React, { useState } from 'react';

const style = {
  container: `w-full h-screen flex justify-center items-center p-4`,
  form: `flex flex-col w-[600px]`,
  pContainer: `pb-8`,
  headerStyle: `text-4xl font-bold inline border-b-4 border-[#86c913] text-[#E0EBE6]`,
  textStyle: `pt-4 text-[#E0EBE6] flex items-center`,
  emailButton: `ml-3`,
  inputStyle: `p-2 bg-[#e0ebe6] rounded-md my-2`,
  button: `workbtn flex items-center mx-auto mt-8`,
};

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    sent: false,
    buttonText: 'Submit',
    err: '',
  });

  console.log(data);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div name="contact" className={style.container}>
      <form className={style.form}>
        <div className={style.pContainer}>
          <h3 className={style.headerStyle}>Contact</h3>
          <p className={style.textStyle}>
            Fill out the form below to reach me.
          </p>
        </div>
        <input
          className={style.inputStyle}
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          className={style.inputStyle}
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={style.inputStyle}
          name="message"
          rows="10"
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className={style.button}>{data.buttonText} 🛸</button>
      </form>
    </div>
  );
};

export default Contact;
