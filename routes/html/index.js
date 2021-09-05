const router    = require('express').Router();
const galleryRoutes = require('./gallery');
//const applicationRoute = require('./application');

router.use('/gallery', galleryRoutes);
//router.use('/', applicationRoute);


module.exports =  router;