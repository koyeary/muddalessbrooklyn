const router    = require('express').Router();
const Image     = require('../../models/Image');

  router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});

    return res.json(images);
  } catch (err) {
    return console.error(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { location, image, rating, hero } = req.body;

    const img = new Image ({
      location,
      image,
      rating,
      hero
    });

    await img.save();

    return console.log(img);
  } catch (err) {
    return console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { _id, rating, notes } = req.body;

    const rateMe = await Image.updateOne({ _id }, {$set: {rating: rating, notes: notes}});

    return res.json(rateMe);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;