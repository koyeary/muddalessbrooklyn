const router            = require('express').Router();
const imageRoutes       = require('./images');
const transporterRoutes = require('./transporter');
const multerRoutes      = require('./multer');

router.use('/images', imageRoutes);
router.use('/mail', transporterRoutes);
router.use('/upload', multerRoutes);


module.exports =  router;