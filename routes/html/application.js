const express = require('express');
const router  = express.Router();

/* router.get('/', async (req, res) => {
    return res.render('index');
}); */

router.get('/', async (req, res) => {
    try {
      const images = await Image.find({ hero: true });
  
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
  
      return res.render('index', hbsObject);
    } catch (err) {
      return console.error(err);
    }
  });

module.exports = router;


