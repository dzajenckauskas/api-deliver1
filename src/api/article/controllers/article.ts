/**
 * article controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::article.article');


'use strict';
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::article.article').findOne({
            where: { slug: id },
            populate: ['image', 'seo', 'articleContinents', 'articleCategory']
        });
        const sanitizedResults = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedResults);
    }
}));
