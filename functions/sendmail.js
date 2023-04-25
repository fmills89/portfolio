require('dotenv').config();
const nodemailer = require('nodemailer');

const { REACT_APP_HOST, REACT_APP_PORT, REACT_APP_USER, REACT_APP_PASS } =
  process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'ola.little@ethereal.email',
    pass: '5fNu15v8CukFpkB99v',
  },
});

exports.handler = async function (event, context) {
  const method = event.httpMethod;
  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Only POST requests allowed',
    };
  }
  let data = JSON.parse(event.body);

  if (!data) {
    return {
      statusCode: 400,
      body: 'Please provide all values.',
    };
  }
  try {
    await transporter.sendMail({
      from: data.name,
      to: 'ola.little@ethereal.email',
      subject: 'Contact Form Submission',
      html: `<p>Name: ${data.name}</p> <p>Email: ${data.email}</p> <p>Message: ${data.message}</p>`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        result: 'success',
      }),
    };
  } catch (error) {
    console.log(data);
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    };
  }
};
