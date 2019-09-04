'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    contents: DataTypes.TEXT
  }, {timestamps: false});
  Content.associate = function(models) {
    // associations can be defined here
  };
  return Content;
};
