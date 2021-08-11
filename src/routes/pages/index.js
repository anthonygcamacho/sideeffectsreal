const { Router } = require('express');

const { notFoundPage } = require('../../controllers/pages/404.controller');
const { homePage } = require('../../controllers/pages/home.controller');
const { aboutPage } = require('../../controllers/pages/about.controller');
const { contactPage } = require('../../controllers/pages/contact.controller');
const { privacyPage } = require('../../controllers/pages/privacy.controller');
const { tosPage } = require('../../controllers/pages/tos.controller');
const { sitemapPage } = require('../../controllers/pages/sitemap.controller');

const { protestmediaPage } = require('../../controllers/pages/protestmedia.controller');
const { protestwashingtondcPage } = require('../../controllers/pages/protestwashingtondc.controller');

const router = Router()

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/contact', contactPage);
router.get('/privacy-policy', privacyPage);
router.get('/terms-of-service', tosPage);
router.get('/sitemap.xml', sitemapPage);

router.get('/protest-mainstream-media', protestmediaPage);
router.get('/protest-washington-dc', protestwashingtondcPage);

router.get('*', notFoundPage);

module.exports = router;