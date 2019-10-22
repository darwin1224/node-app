'use strict';

class DataNotFoundException extends Error {
  /**
   * Constructor
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    super();

    /**
     * Name of the exception
     *
     * @type {string}
     */
    this.name = this.constructor.name;

    /**
     * Exception message
     *
     * @type {string}
     */
    this.message = message;
  }
}
