const express = require('express');
const siteController = require('../app/controllers/SiteControllers');
const  router = express.Router();

router.use('/:slug', siteController.search);
router.use('/', siteController.home);

module.exports = router;