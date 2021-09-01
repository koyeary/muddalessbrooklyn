const router = require('router');
const galleryRoutes = require('./gallery');
const applicationRoute = require('./application');

router.use('/gallery', galleryRoutes);
router.use('/', applicationRoute);


module.exports =  router;