'use strict';

/**
 * `disable-transformer` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    await next();
  };
}; 