const express = require('express');
const router = express.Router();
const Image = require('../../models/Image');

router.get('/', async (req, res) => {
  try {
    
    const images = await Image.find({});

    const hbsObject = {
      imageDocuments: images.map((doc) => {
          return {
            _id: doc._id,
            description: doc.description,
            image: doc.image,
            hero: doc.hero
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
