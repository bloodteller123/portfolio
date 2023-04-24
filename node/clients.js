require("dotenv").config();
const mailer = require('nodemailer');
const {google} = require('googleapis')

// const REDIRECT_URL = 
const OAuth2Client = new google.auth.OAuth2(process.env.EMAIL_CLIENT_ID, process.env.EMAIL_CLIENT_SECRET,"https://developers.google.com/oauthplayground")

const mailService = (accessToken) => mailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_ADDRESS,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_CLIENT_REFRESH,
        accessToken: accessToken
    }
  });

module.exports = {
  mailService,
  OAuth2Client
}