const { DataTypes } = require('sequelize');

// Files
const db = require('../utils/database');
// Models
const Users = require('./users.models')
const Categories = require('./categories.models');

const Recipes = db.define('recipes', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  }, 

  title: {
    type: DataTypes.STRING,
    allowNull: false,
    // Min 5 characteres
    validate: {
      min: 5
    }
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false  
  },

  urlImg: {
    type: DataTypes.STRING,
    validate: {
      // isUrl: true
    },
    field: 'url_img',
  },

  time: {
    type: DataTypes.INTEGER,
    allowNull: false  
  },

  portions: {
    type: DataTypes.INTEGER,
    allowNull: false  
  },

  // Sequelize lo require en singular 
  // Termina con el prefijo id
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id'
    }
  },

  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
    references: {
      model: Categories,
      key: 'id'
    }
  },

  origin: {
    type: DataTypes.STRING,
  },

  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }

});


module.exports = Recipes;