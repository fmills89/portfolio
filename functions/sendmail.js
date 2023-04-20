require('dotenv').config();
const nodemailer = require('nodemailer');

const pass = process.env.REACT_APP_NODEMAIL_PASS;
const email = process.env.REACT_APP_NODEMAILER_EMAIL;
const host = process.env.REACT_APP_NODEMAILER_HOST;
const port = process.env.REACT_APP_NODEMAILER_PORT;

let transporter = nodemailer.createTransport({
  host: host,
  port: port,
  auth: {
    user: email,
    pass: pass,
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
    transporter.sendMail({
      from: data.name,
      to: email,
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
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    };
  }
};
