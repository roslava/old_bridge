'use strict';

/**
 * home-screen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-screen.home-screen');
