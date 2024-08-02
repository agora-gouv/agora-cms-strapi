'use strict';

/**
 * welcome-page-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-page-new.welcome-page-new');
