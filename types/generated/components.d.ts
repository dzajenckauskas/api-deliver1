import type { Schema, Attribute } from '@strapi/strapi';

export interface CitiesCities extends Schema.Component {
  collectionName: 'components_cities_cities';
  info: {
    displayName: 'cities';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cities.cities': CitiesCities;
      'seo.seo': SeoSeo;
    }
  }
}
