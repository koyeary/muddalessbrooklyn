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

/*
router.put('/:id', async (req, res) => {
  const { id, rating } = req.body;

  try {
    const image = await Image.updateOne({ id, rating });

    if (!image) {
      return res.status(400).json({ msg: 'Image not found' });
    }

    await image.save();
    res.status(200).json({ msg: 'Image updated' });
  } catch (err) {
    return console.error(err);
  }
}); */

/* router.post('/', async (req, res) => {
    const { image, location, hero } = req.body;
    try {
        const img = new Image({
            image,
            location,
            hero
        });

        await img.save();
        return res.status(200).json({ msg: 'image successfully created'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}); */

module.exports = router;