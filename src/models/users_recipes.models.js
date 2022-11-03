  const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Recipes = require('./recipes.models');
const Users = require('./users.models');

const UsersRecipes = db.define('users_recipes', {


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

  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'recipe_id',
    references: {
      model: Recipes,
      key: 'id'
    }
  },

  favorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

});


module.exports = UsersRecipes;