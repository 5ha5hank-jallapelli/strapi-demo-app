'use strict';

/**
 * `windows-app-catalog-populate` middleware
 */

const populate = {
  hero_section: {
    populate: {
      buttons: {
        populate: true
      }
    },
    fields: [],
  },
  simplify_app_management: {
    populate: true
  },
  discover: {
    populate: {
      features: {
        populate: {
          icon: {
            populate: true
          }
        },
      },
    }
  },
  empoweringAdmins: {
    populate: {
      features: {
        populate: true
      }
    }
  },
  variety_apps: {
    populate: true
  },
  cta_one: {
    populate: {
      buttons: {
        populate: true
      }
    }
  },
  cta_two: {
    populate: {
      buttons: {
        populate: true
      }
    }
  },
  metadata: {
    populate: true,
    fields: []
  }
}

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
