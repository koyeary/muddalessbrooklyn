const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
   try {
    
    const images = await Image.find({});

     const hbsObject =  {
      layout: 'gallery',
      galleryDocument: images.map((doc) => {
          return {
            _id: doc._id,
            location: doc.location,
            galleryImage: doc.image,
            hero: doc.hero,
            rating: doc.rating
          };
      })
    }

    console.log(hbsObject);
    return res.render('gallery', hbsObject ); 
 
  } catch (err) {
    return console.error(err);
  } 
});


module.exports = router;
