const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

require('dotenv').config();

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


app.post('/send', (req, res) => {
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: '327159d31d55a0',
      pass: 'e6568ee0aa2b50'
    },
    debug: true,
    logger: true
  });
var mailOptions = {
  from: req.body.email,
  to: 'user@example.com, user2@example.com',
  subject: `${req.body.name}, ${req.body.phone}` ,
  text: req.body.name + req.body.email + req.body.phone + req.body.textarea
  // attachments: [
  //   {
  //     filename: 'text.txt',
  //     content: 'new important notes',
  //     contentType: 'text/plain',
  //     path: 'text.txt'
  //   }
  // ]
};
  transport.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Message sent: %s`, res.messageId);
    }
  });
});

// listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
