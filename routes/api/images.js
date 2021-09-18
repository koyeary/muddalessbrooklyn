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