const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

require('dotenv').config();

// bring in the models
// const db = require('./models/');
const routes = require('./controllers/');


const app = express();
const allowedOrigins = ['http://localhost:3000'];

// const auth = {
//   type: 'oauth2',
//   user: 'yoolhyunlaw@gmail.com',
//   clientId: process.env.clientId,
//   clientSecret: process.env.clientSecret,
//   refreshToken: process.env.refreshToken
// };

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(routes);

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user:
//     pass:
//   }
// });

// let mailOptions = {
//   from:
//   to: 'yoolhyunlaw@gmail.com',
//   subject: 'Testing to see if email works',
//   text: 'some measure of text'
// };

// transporter.sendMail(mailOptions, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('email sent');
//   }
// });

// listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
