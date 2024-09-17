export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '256mb', // Set form data limit
      jsonLimit: '256mb', // Set JSON data limit
      textLimit: '256mb', // Set text data limit
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // Set max upload file size to 100MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
