const express = require('express');
const router  = express.Router();

router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    const sortedImages = [...images].sort((a, b) => {
      return a.rating - b.rating;
    });

    const filtImgs = sortedImages.filter(image => image.rating > 0 );

    const hbsObject = {
      layout: 'gallery',

      galleryDocument: filtImgs.map((img) => {
        return {
          _id: img._id,
          location: img.location,
          galleryImage: img.image,
          hero: img.hero,
          rating: img.rating
        };
      })
    };

    return res.render('gallery', hbsObject);
  } catch (err) {
    return console.error(err);
  }
});

module.exports = router;
