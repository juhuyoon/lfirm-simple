const router = require('express').Router();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const db = require('../../models/Comments');

// This route renders the homepage
router.post('/consultation', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: ''
      })
    }
  });

  const mailOptions = {
    from: process.env.emailUser,
    to: 'yoolhyunlaw@gmail.com',
    subject: 'Testing to receive',
    text: req.body.message
  }
});

module.exports = router;
