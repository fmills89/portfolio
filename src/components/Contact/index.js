import React, { useState } from 'react';
import axios from 'axios';

const style = {
  container: `w-full h-screen flex justify-center items-center`,
  formContainer: `max-w-[1000px] `,
  form: `flex flex-col w-[370px] md:w-[600px] `,
  pContainer: `pb-8 text-center md:text-left`,
  headerStyle: `text-4xl font-bold boxDeco w-[150px]`,
  textStyle: `py-2 mt-2 boxDeco w-[270px]`,
  emailButton: `ml-3`,
  inputStyle: `p-2 bg-[#e0ebe6] rounded-md my-2 text-slate-900`,
  button: `flex items-center mx-auto my-8 bg-lime-600/75 p-2 px-4 rounded-lg shadow-xl font-bold`,
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
      <div className={style.formContainer}>
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
    </div>
  );
};

export default Contact;
