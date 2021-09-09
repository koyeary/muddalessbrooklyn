var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  image: { 
    type: String,
    required: true },
  description: { 
    type: String, 
    required: true 
  },
  hero: {
    type: Boolean,
    default: false
  }
});

module.exports = Image = mongoose.model("Image", ImageSchema);

