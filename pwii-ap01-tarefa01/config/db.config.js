const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite'
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pessoa = require('../models/pessoa')(sequelize, Sequelize);
db.user = require('../models/user')(sequelize, Sequelize);

db.sync = async() => {
  await sequelize.sync();
};

module.exports = db;
