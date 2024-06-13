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

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
    fullAnswer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SectionCardSectionCard extends Schema.Component {
  collectionName: 'components_section_card_section_cards';
  info: {
    displayName: 'SectionCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    shortContent: Attribute.Text;
    buttonText: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
    richText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    sectionCards: Attribute.Component<'section-card.section-card', true>;
    sectionTitle: Attribute.String;
    sectionSubtitle: Attribute.String;
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
      'faq.faq': FaqFaq;
      'section-card.section-card': SectionCardSectionCard;
      'section.section': SectionSection;
      'seo.seo': SeoSeo;
    }
  }
}
