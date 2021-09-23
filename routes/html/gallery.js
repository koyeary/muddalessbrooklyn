const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    const sortedImages = [...images].sort((a, b) => {
      return a.rating - b.rating;
    });

    const hbsObject = {
      layout: 'gallery',

      galleryDocument: sortedImages.map((doc) => {
        return {
          _id: doc._id,
          location: doc.location,
          galleryImage: doc.image,
          hero: doc.hero,
          rating: doc.rating,
          notes: doc.notes
        };
      })
    };

    console.log(hbsObject);
    return res.render('gallery', hbsObject);
  } catch (err) {
    return console.error(err);
  }
});

module.exports = router;
