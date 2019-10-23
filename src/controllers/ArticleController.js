'use strict';

/** @typedef {import('../services/ArticleService.js')} ArticleService */
/** @typedef {import('../exceptions/DataNotFoundException.js')} DataNotFoundException */
/** @typedef {import('../exceptions/InsertFailedException.js')} InsertFailedException */
/** @typedef {import('../exceptions/UpdateFailedException.js')} UpdateFailedException */
/** @typedef {import('../exceptions/DeleteFailedException.js')} DeleteFailedException */

const ArticleService = require('../services/ArticleService.js');
const DataNotFoundException = require('../exceptions/DataNotFoundException.js');
const InsertFailedException = require('../exceptions/InsertFailedException.js');
const UpdateFailedException = require('../exceptions/UpdateFailedException.js');
const DeleteFailedException = require('../exceptions/DeleteFailedException.js');

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

  /**
   * Get resource by id in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async show(req, res) {
    try {
      const data = await this._article.getArticleById(Number(req.params.id));
      return res.json(data);
    } catch (err) {
      return res.status(404).json(new DataNotFoundException(err.message));
    }
  }

  /**
   * Insert single resource in storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async store(req, res) {
    try {
      const store = await this._article.insertArticle(req.body);
      return res.status(201).json(store);
    } catch (err) {
      return res.status(400).json(new InsertFailedException(err.message));
    }
  }

  /**
   * Update single resource by id from storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async update(req, res) {
    try {
      const update = await this._article.updateArticle(req.body, Number(req.params.id));
      return res.json(update);
    } catch (err) {
      return res.status(400).json(new UpdateFailedException(err.message));
    }
  }

  /**
   * Delete single resource by id from storage
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async destroy(req, res) {
    try {
      const destroy = await this._article.deleteArticle(Number(req.params.id));
      return res.json(destroy);
    } catch (err) {
      return res.status(400).json(new DeleteFailedException(err.message));
    }
  }
}

module.exports = ArticleController;
