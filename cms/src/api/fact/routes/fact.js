'use strict';

/**
 * fact router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fact.fact');
