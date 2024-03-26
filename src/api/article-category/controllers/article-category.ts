// /**
//  * article-category controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::article-category.article-category');

'use strict';
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article-category.article-category', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::article-category.article-category').findOne({
            where: { key: id },
            populate: ['image', 'seo']
        });
        const sanitizedResults = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedResults);
    }
}));
