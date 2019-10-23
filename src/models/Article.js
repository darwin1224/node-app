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
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      tableName: 'tbl_article',
      timestamps: false,
    },
  );

  return Article;
};
