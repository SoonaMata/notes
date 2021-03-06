const Sequelize = require('sequelize');
const createdbconnection = require('../utilities/db_utils.js');
const sequelize = createdbconnection();

const Topics = sequelize.define(
  'topic',
  {
    // id: {
    //   type: Sequelize.INTEGER ,
    //   primaryKey:true
    // },
    name: Sequelize.STRING,
    user_id: Sequelize.INTEGER
  },
  {
    timestamps:false,
    tableName: 'topics'
  }
);

module.exports= Topics;


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Topic = sequelize.define('Topic', {
//     id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true, allowNull:false},
//     name: DataTypes.STRING,
//     user_id: {type: DataTypes.INTEGER}
//   }, {
//     timestamps: false
//   });
//   Topic.associate = function(models) {
//     // associations can be defined here
//   };
//   return Topic;
// };
