'use strict'

class ArticleService {
  /**
   * Get all data
   * 
   * @returns {Promise<string>}
   */
  getAllArticle() {
    return Promise.resolve('Hello World')
  }
}

module.exports = ArticleService