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
};
