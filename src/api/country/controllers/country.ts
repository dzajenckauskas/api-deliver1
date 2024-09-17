/**
 * country controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::country.country');


//'use strict';
//import { factories } from '@strapi/strapi';

//export default factories.createCoreController('api::country.country', ({ strapi }) => ({
//    async findOne(ctx) {
//        const { id } = ctx.params;
//        const entity = await strapi.db.query('api::country.country').findOne({
//            where: { url: id },
//            populate: ['image', 'seo', 'cities']
//        });
//        const sanitizedResults = await this.sanitizeOutput(entity, ctx);
//
//        return this.transformResponse(sanitizedResults);
//    }
//}));

'use strict';
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::country.country', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        // Define the populate object with nested relations
        const populateObj = {
            image: true,
            seo: true,
            cities: true,
            faqs: true,
            cardsSection: {
                populate: {
                    sectionCards: {
                        populate: {
                            image: true,
                        },
                    },
                },
            },
            iconsSection: {
                populate: {
                    sectionCards: {
                        populate: {
                            image: true,
                        },
                    },
                },
            },
            listSection: {
                populate: {
                    sectionCards: {
                        populate: {
                            image: true,
                        },
                    },
                },
            },
            videoSection: {
                populate: {
                    video: true,
                },
            },
        };

        // Find the entity with the specified URL and populate the necessary fields
        const entity = await strapi.db.query('api::country.country').findOne({
            where: { url: id },
            populate: populateObj
        });

        // Sanitize the output to ensure no sensitive information is included
        const sanitizedResults = await this.sanitizeOutput(entity, ctx);

        // Transform and return the response
        return this.transformResponse(sanitizedResults);
    }
}));
