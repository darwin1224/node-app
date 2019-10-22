'use strict';

/** @typedef {import('express')} express */
/** @typedef {import('cors')} cors */
/** @typedef {import('body-parser')} bodyParser */
/** @typedef {import('morgan')} morgan */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/** @typedef {import('./routes/ArticleRoute.js')} ArticleRoute */

const ArticleRoute = require('./routes/ArticleRoute.js');

class App {
  /**
   * Constructor
   *
   * @returns {void}
   */
  constructor() {
    this.app = express();
    this._port = process.env.PORT || 3000;
    this._article = new ArticleRoute();
    this._init();
    this._listen();
  }

  /**
   * Bootstrap the app
   *
   * @returns {void}
   */
  _init() {
    this._setUpCors();
    this._setUpBodyParser();
    this._setUpMorgan();
    this._setUpRoutePath();
  }

  /**
   * Set up cors
   *
   * @returns {void}
   */
  _setUpCors() {
    this.app.use(cors());
  }

  /**
   * Set up body parser
   *
   * @returns {void}
   */
  _setUpBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   * Set up morgan
   *
   * @returns {void}
   */
  _setUpMorgan() {
    this.app.use(morgan('dev'));
  }

  /**
   * Bootstrap all routes
   *
   * @returns {void}
   */
  _setUpRoutePath() {
    this._setUpArticleRoute();
  }

  /**
   * Set up article routes
   *
   * @returns {void}
   */
  _setUpArticleRoute() {
    this._article.routes(this.app);
  }

  /**
   * Serve the app
   *
   * @returns {void}
   */
  _listen() {
    if (!module.parent) {
      this.app.listen(this._port, () => {
        console.log(`Server is running at port ${this._port}`);
      });
    }
  }
}

module.exports = new App();
