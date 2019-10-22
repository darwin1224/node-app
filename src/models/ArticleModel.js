'use strict';

module.exports = (sequelize, DataTypes) => {
  const ArticleModel = sequelize.define(
    'ArticleModel',
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {},
  );
  ArticleModel.associate = function(models) {
    // associations can be defined here
  };
  return ArticleModel;
};
