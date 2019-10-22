'use strict';

const { expect } = require('chai');
const ArticleService = require('../../../src/services/ArticleService.js');
const article = new ArticleService();

describe('Article Service tests', () => {
  describe('Get all article test', () => {
    it('should return not empty or not null', async () => {
      const res = await article.getAllArticle();
      expect(res).to.not.be.empty;
      expect(res).to.not.be.null;
    });

    it('should return type string', async () => {
      const res = await article.getAllArticle();
      expect(res).to.string;
    });

    it('should return hello world message', async () => {
      const res = await article.getAllArticle();
      expect(res).to.equal('Hello World');
    });
  });

  describe('Get article by id test', () => {
    it('should return not null', async () => {
      const res = await article.getArticleById(1);
      expect(res).to.not.be.null;
    });

    it('should return type integer', async () => {
      const res = await article.getArticleById(1);
      expect(res).to.be.a('number');
    });

    it('should return 1', async () => {
      const res = await article.getArticleById(1);
      expect(res).to.equal(1);
    });
  });
});
