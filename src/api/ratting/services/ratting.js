'use strict';

/**
 * ratting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ratting.ratting');
