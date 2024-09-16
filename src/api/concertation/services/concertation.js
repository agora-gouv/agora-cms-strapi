'use strict';

/**
 * concertation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concertation.concertation');
