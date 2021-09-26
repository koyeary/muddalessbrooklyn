const router    = require('express').Router();
const multer    = require('multer');
const upload    = multer({ dest: './public/assets/img/' });

router.post('/', upload.single(('image'), (req, res, next) => {
    const file = req.file;
     if(!file) {
         return res.status(404).json({ msg: 'Must submit file to upload'});
     }
        return res.send(file);
}));

module.exports = router;