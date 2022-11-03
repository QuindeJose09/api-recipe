  const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Ingredients = require('./ingredients.models');
const Recipes = require('./recipes.models');
const Users = require('./users.models');

const UserIngredients = db.define('users_ingredients', {


  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },

  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id'
    }
  },

  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'ingredient_id',
    references: {
      model: Ingredients,
      key: 'id'
    }
  },

  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  }

});


module.exports = UserIngredients;