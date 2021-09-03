const express = require('express');
const router = express.Router();
const Image = require('../../models/Image');

router.get('/', async (req, res) => {
  try {
    
    const images = await Image.find({});

    const hbsObject = {
      imageDocuments: images.map((doc) => {
        return {
          image: doc.image,
          description: doc.description,
          _id: doc._id
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
