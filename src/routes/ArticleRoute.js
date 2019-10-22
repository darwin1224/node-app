'use strict';

/** @typedef {import('../controllers/ArticleController.js')} ArticleController */

const ArticleController = require('../controllers/ArticleController.js');

class ArticleRoute {
  /**
   * Constructor
   *
   * @returns {void}
   */
  constructor() {
    this._article = new ArticleController();
  }

  /**
   * Bootstrap all routes
   *
   * @param {Application} app
   * @returns {void}
   */
  routes(app) {
    /**
     * GET /article
     */
    app.get('/article', this._article.index.bind(this._article));

    /**
     * GET /article/:id
     */
    app.get('/article/:id', this._article.show.bind(this._article));
  }
}

module.exports = ArticleRoute;
