const express = require('express');
const router  = express.Router();
const Image = require('../../models/Image');

router.get('/', async (req, res) => {
    try {
      const images = await Image.find({});
      const hbsObject = {
          images: images
      };

      return res.render('gallery/gallery', hbsObject);
    } catch (err) {
      return console.error(err);
    }
  });

module.exports = router;