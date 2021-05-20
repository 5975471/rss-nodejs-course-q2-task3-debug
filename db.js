const Sequelize = require('sequelize');
//database username   password
// const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
//     host: 'localhost',
//     dialect: 'postgres'
// })
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5433,
  }
);

sequelize.authenticate().then(
  function success() {
    console.log('Connected to DB');
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);

const db = {};
db.sequelize = sequelize;

module.exports = db;
