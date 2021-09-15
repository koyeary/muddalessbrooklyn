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

module.exports = router;