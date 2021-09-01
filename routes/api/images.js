const Image = require('../../models/Image');

/* router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});

    return res.json(images);
  } catch (err) {
    return console.error(err);
  }
}); */

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
});

module.exports = router;