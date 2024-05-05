'use strict';

/**
 * windows-app-catalog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::windows-app-catalog.windows-app-catalog', {
  config: {
    find: {
      middlewares: ['api::windows-app-catalog.windows-app-catalog-populate']
    },
    findOne: {
      middlewares: ['api::windows-app-catalog.windows-app-catalog-populate']
    }
  }
})
