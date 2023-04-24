import React, { useState } from 'react';
import axios from 'axios';

const style = {
  container: `w-full h-screen flex justify-center items-center p-4 my-40`,
  form: `flex flex-col w-[600px]`,
  pContainer: `pb-8 text-center md:text-left`,
  headerStyle: `text-4xl font-bold inline border-b-4 border-[#86c913]`,
  textStyle: `pt-4`,
  emailButton: `ml-3`,
  inputStyle: `p-2 bg-[#e0ebe6] rounded-md my-2 text-slate-900`,
  button: `flex items-center mx-auto mt-8 bg-[#86c913] p-4 rounded-lg text-slate-900/75 shadow-xl font-bold`,
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

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Submit',
      err: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log({ ...data });
    setData({ ...data, buttonText: 'Sending...' });
    axios
      .post('/api/sendmail', data)
      .then(res => {
        if (res.data.result !== 'success') {
          setData({
            ...data,
            buttonText: 'Failed to send!',
            sent: false,
            err: 'fail',
          });
          setTimeout(() => {
            resetForm();
          }, 2000);
        } else {
          alert('Message sent!');
          setData({
            ...data,
            sent: true,
            buttonText: 'Sent',
            err: 'Success',
          });
          setTimeout(() => {
            resetForm();
          }, 2000);
        }
      })
      .catch(err => {
        setData({
          ...data,
          buttonText: 'Failed to send.',
          err: 'Fail',
        });
      });
  };

  return (
    <div name="contact" className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
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
