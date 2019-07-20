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

const auth = {
  type: 'oauth2',
  user: 'yoolhyunlaw@gmail.com',
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken
};

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


// app.post('/send', (req, res) => {
//   response = {
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message
//   }

//   const mailOptions = {
//     from: req.body.name,
//     to: 'yoolhyunlaw@gmail.com',
//     subject: `Testing to see ${req.body.name}`,
//     text: req.body.message,
//     html: `Message from: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`
//   };

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth
//   });

//   transporter.sendMail(mailOptions, (err, res) => {
//     if (err) {
//       return console.log(err);
//     } console.log(JSON.stringify(res));
//   });
// });


// listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
