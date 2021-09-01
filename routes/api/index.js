const path =    require('path');
const router = require('router');
const imageRoutes = require('./images');
const transporterRoutes = require('./transporter');

router.use('/images', imageRoutes);
router.use('/mail', transporterRoutes);


module.exports =  router;