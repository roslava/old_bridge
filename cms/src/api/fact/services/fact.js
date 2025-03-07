'use strict';

/**
 * fact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fact.fact');
