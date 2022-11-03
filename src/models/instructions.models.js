const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Recipes = require('./recipes.models');

const Instruccions = db.define('instruccions', {


  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  step: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'recipe_id',
    references: {
      model: Recipes,
      key: 'id'
    }
  }

  //! Evita crear la columna createAt y updateAt
});


module.exports = Instruccions;