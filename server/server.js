// basic express server
// const express = require('express');
// var app = express();
//
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });
//
// app.listen(3000);

const express = require('express');
var app = express();

app.get('/', (req, res) => {
  res
    .status(404)
    .send({error: 'Page not found.', name: 'Todo App v1.0'});
});

app.get('/users', (req, res) => {
  var user = {name: 'Dries', age: 22};
  var user1 = {name: 'Sofie', age: 23};
  var user2 = {name: 'Maite', age: 10};
  res.send([user, user1, user2]);
});

app.listen(3000);

module.exports.app = app;
