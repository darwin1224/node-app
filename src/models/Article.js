'use strict';

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      id_article: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title_article: DataTypes.STRING,
      body_article: DataTypes.STRING,
    },
    {
      tableName: 'tbl_article',
      timestamps: false,
    },
  );

  return Article;
};
