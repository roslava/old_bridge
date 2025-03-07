'use strict';

/**
 * home-screen router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-screen.home-screen');
