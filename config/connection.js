// const mysql = require('mysql');
// require('dotenv').config();

// const connection = mysql.createConnection({
//   host: process.env.dbHost,
//   port: process.env.port,
//   user: process.env.dbUser,
//   password: process.env.dbPass,
//   database: process.env.dbData
// });


// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected as id ${connection.threadId}`);
//   connection.end();
// });

// module.exports = connection;
