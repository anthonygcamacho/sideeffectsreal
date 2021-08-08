const { Router } = require('express');

const { notFoundPage } = require('../../controllers/pages/404.controller');
const { homePage } = require('../../controllers/pages/home.controller');
const { aboutPage } = require('../../controllers/pages/about.controller');
const { contactPage } = require('../../controllers/pages/contact.controller');
const { privacyPage } = require('../../controllers/pages/privacy.controller');
const { tosPage } = require('../../controllers/pages/tos.controller');
const { sitemapPage } = require('../../controllers/pages/sitemap.controller');

const { cnnPage } = require('../../controllers/pages/cnn.controller');
const { foxnewsPage } = require('../../controllers/pages/foxnews.controller');
const { nbcPage } = require('../../controllers/pages/nbc.controller');
const { washingtonDCPage } = require('../../controllers/pages/washingtondc.controller');
// const { protestsPage } = require('../../controllers/pages/protests.controller');

const router = Router()

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/contact', contactPage);
router.get('/privacy-policy', privacyPage);
router.get('/terms-of-service', tosPage);
router.get('/sitemap.xml', sitemapPage);

router.get('/cnn-protest', cnnPage);
router.get('/fox-news-protest', foxnewsPage);
router.get('/nbc-protest', nbcPage);
router.get('/washington-dc-protest', washingtonDCPage);
// router.get('/protests', protestsPage);

router.get('*', notFoundPage);

module.exports = router;