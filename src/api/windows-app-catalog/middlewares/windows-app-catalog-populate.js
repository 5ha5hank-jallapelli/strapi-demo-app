'use strict';

/**
 * `windows-app-catalog-populate` middleware
 */

const populate = {
  hero_section: {
    populate: true,
    fields: []
  },
  metadata: {
    populate: true,
    fields: []
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In windows-app-catalog-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }
    await next();
  };
};
