var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
// add process.env
require('dotenv').config();
var game = require('./controllers/gamecontroller');

const port = process.env.PORT || 4000;

db.sequelize.sync();
app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);
app.listen(port, function () {
  console.log(`Task 3 is listening on ${port}`);
});
