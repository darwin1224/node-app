'use strict';

/** @typedef {import('../services/ArticleService.js')} ArticleService */
/** @typedef {import('../exceptions/DataNotFoundException.js')} DataNotFoundException */

const ArticleService = require('../services/ArticleService.js');
const DataNotFoundException = require('../exceptions/DataNotFoundException.js');

class ArticleController {
  /**
   * Constructor
   *
   * @returns {void}
   */
  constructor() {
    this._article = new ArticleService();
  }

  /**
   * Get all resources in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async index(req, res) {
    try {
      const data = await this._article.getAllArticle();
      return res.json(data);
    } catch (err) {
      return res.status(400).json(new DataNotFoundException(err.message));
    }
  }
}

module.exports = ArticleController;
