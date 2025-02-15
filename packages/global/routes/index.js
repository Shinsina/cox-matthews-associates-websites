const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@cox-matthews-associates/package-theme-monorail/routes/render-block');
const taxonomy = require('@cox-matthews-associates/package-theme-monorail/routes/taxonomy');
const dynamicPage = require('./dynamic-page');
const feed = require('./feed');
// const identityX = require('./identity-x');
const magazine = require('../components/magazine/routes');
const nativeX = require('./native-x');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const search = require('./search');

module.exports = (app, siteConfig) => {
  // HTML Sitemap
  htmlSitemap(app);

  // Feed
  feed(app);

  // magazine
  magazine(app);

  // // IdentityX (user routing and app context)
  // identityX(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Search routes
  search(app, siteConfig);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Dynamic Pages
  dynamicPage(app);
};
