const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets


if(process.env.NODE_ENV == 'production'){
  app.use(express.static("client/public"));
 
}
// Add routes, both API and view
app.use(routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;


// mongoose.connect('mongodb://heroku_968j4pks:xEJjvRNBBUFUOgioXXbI00w_Gc51lEGL@ds14 3738.mlab.com:43738/heroku_968j4pks');
// else{}
  mongoose.connect(
   process.env.MONGODB_URI || 'mongodb://localhost/nytreact',
   {
      useMongoClient: true
    });

/
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

//  var db = mongoose.connection;

// // Show any Mongoose errors
// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });

// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/nytreact", 


// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect('mongodb://heroku_968j4pks:xEJjvRNBBUFUOgioXXbI00w_Gc51lEGL@ds143738.mlab.com:43738/heroku_968j4pks');
// var db = mongoose.connection;

// db.on('error', function (err) {
//   console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
//   console.log('Mongoose connection successful.');
// });