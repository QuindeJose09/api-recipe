const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Types = db.define('types', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  //! Evita crear la columna createAt y updateAt
}, { timestamps: false });

module.exports = Types;
