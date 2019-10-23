'use strict';

const { Model } = require('sequelize');
const { Article } = require('../models/index.js');

class ArticleService {
  /**
   * Get all data
   *
   * @returns {Promise<Model>}
   */
  getAllArticle() {
    return Article.findAll();
  }

  /**
   * Get data by id
   *
   * @param {number} id
   * @returns {Promise<Model>}
   */
  getArticleById(id) {
    return Article.findByPk(id);
  }

  /**
   * Insert data
   *
   * @param {Object} params
   * @returns {Promise<Model>}
   */
  insertArticle(params) {
    return Article.create(params);
  }

  /**
   * Update data by id
   *
   * @param {Object} params
   * @param {number} id
   * @returns {Promise<Array<number, number>>}
   */
  updateArticle(params, id) {
    return Article.findByPk(id).update(params);
  }

  /**
   * Delete data by id
   *
   * @param {number} id
   * @returns {Promise<number>}
   */
  deleteArticle(id) {
    return Article.destroy({ where: { id_article: id } });
  }
}

module.exports = ArticleService;
