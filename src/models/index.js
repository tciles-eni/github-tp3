const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  // host: dbConfig.HOST,
  dialect: 'sqlite',
  // pool: dbConfig.pool??
  storage: 'sequelize.sqlite'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.task = require('./task.model.js')(sequelize, DataTypes);

module.exports = db;
