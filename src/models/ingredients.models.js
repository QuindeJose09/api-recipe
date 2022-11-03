const {DataTypes} = require('sequelize');

const db = require('../utils/database');
const Types = require('./types.models');

const Ingredients = db.define('ingredients', {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'type_id',
    references: {
      model: Types,
      key: 'id'
    }
  },

  urlImg: {
    type: DataTypes.STRING,
    
    validate: {
      // isUrl: true
    },
    field: 'url_img'
  }
  //! Evita crear la columna createAt y updateAt
}, { timestamps: false });


module.exports = Ingredients;