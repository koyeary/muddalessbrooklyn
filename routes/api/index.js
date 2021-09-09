const router            = require('express').Router();
const imageRoutes       = require('./images');
const transporterRoutes = require('./transporter');
//const googleRoutes      = require('./google');

router.use('/images', imageRoutes);
//router.use('/google', googleRoutes);
router.use('/mail', transporterRoutes);


module.exports =  router;