'use strict';

/** @typedef {import('sequelize')} Sequelize.Model */
/** @typedef {import('../models/index.js')} db.Article */

const { Model } = require('sequelize');
const { Article } = require('../models/index.js');

class ArticleService {
  /**
   * Constructor
   *
   * @returns {void}
   */
  constructor() {
    this._article = Article;
  }

  /**
   * Get all data
   *
   * @returns {Promise<Model>}
   */
  getAllArticle() {
    return this._article.findAll();
  }

  /**
   * Get data by id
   *
   * @param {number} id
   * @returns {Promise<Model>}
   */
  getArticleById(id) {
    return this._article.findByPk(id);
  }

  /**
   * Insert data
   *
   * @param {Object} params
   * @returns {Promise<Model>}
   */
  insertArticle(params) {
    return this._article.create(params);
  }

  /**
   * Update data by id
   *
   * @param {Object} params
   * @param {number} id
   * @returns {Promise<Array<number, number>>}
   */
  updateArticle(params, id) {
    return this._article.findByPk(id).update(params);
  }

  /**
   * Delete data by id
   *
   * @param {number} id
   * @returns {Promise<number>}
   */
  deleteArticle(id) {
    return this._article.destroy({ where: { id_article: id } });
  }
}

module.exports = ArticleService;
