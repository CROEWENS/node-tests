var db = require('./db.js');

// spies let's u swap out fake function for the real function to see if it works.

module.exports.handleSignup = (email, password) => {
  // check if the email already exists

  // save the user to db
  db.saveUser({email, password});

  // we're going to send that welcome email
};
