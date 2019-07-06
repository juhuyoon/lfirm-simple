const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors');
const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');

require('dotenv').config();

// bring in the models
const db = require('./models/');
const routes = require('./controllers/');


const app = express();
const allowedOrigins = ['http://localhost:3000'];

// Serve static content for the app from the "public" directory in the application directory.
app.use(cors({

  origin(origin, callback) {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not '
                + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },

  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],

  credentials: true
}), express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(routes);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
    // user: process.env.emailUser,
    // pass: process.env.emailPW
  }
});

const mailOptions = {
  from: process.env.emailUser,
  to: '',
  subject: 'Testing to receive',
  html: '<p>Some text here </p>'
};

transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
