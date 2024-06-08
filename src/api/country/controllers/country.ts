/**
 * country controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::country.country');

'use strict';
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::country.country', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::country.country').findOne({
            where: { url: id },
            populate: ['image', 'seo', 'cities','faqs']
        });
        const sanitizedResults = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedResults);
    }
}));
