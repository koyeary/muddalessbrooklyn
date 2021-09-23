const express = require('express');
const router  = express.Router();


router.get('/', async (req, res) => {
    try {
      const images = await Image.find({ hero: true } );
  
      const hbsObject = {
        imageDocument: images.map((img) => {
          return {
            _id: img._id,
            location: img.location,
            image: img.image,
            hero: img.hero,
            rating: img.rating
          };
        }),        
      };

      return res.render('index', hbsObject);
    } catch (err) {
      return console.error(err);
    }
  });

module.exports = router;


