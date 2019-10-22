'use strict';

class ArticleService {
  /**
   * Get all data
   *
   * @returns {Promise<string>}
   */
  getAllArticle() {
    return Promise.resolve('Hello World');
  }

  /**
   * Get data by id
   *
   * @param {number} id
   * @returns {Promise<number>}
   */
  getArticleById(id) {
    return Promise.resolve(id);
  }
}

module.exports = ArticleService;
