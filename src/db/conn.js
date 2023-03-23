
const express = require("express");
const app = express();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('abc', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;