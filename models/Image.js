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
  rating: Number,
  date: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = Image = mongoose.model("Image", ImageSchema);

