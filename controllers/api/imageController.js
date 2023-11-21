const { Image } = require("../../models");
var db = require("../../models");

module.exports = (app) => {
  app.get("/api/images", async (req, res) => {
    try {
      const images = await db.Image.find({});

      return res.json(images);
    } catch (err) {
      return console.error(err);
    }
  }),
    app.put("/api/images/:id", async (req, res) => {
      const { id, rating } = req.body;

      try {
        const image = await Image.updateOne({ id, rating });

        if (!image) {
          return res.status(400).json({ msg: "Image not found" });
        }

        await image.save();
        res.status(200).json({ msg: "Image updated" });
      } catch (err) {
        return console.error(err);
      }
    });
};
