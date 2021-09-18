var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  image: { 
    type: String,
    required: true },
  location: { 
    type: String, 
    required: true 
  },
  hero: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number
  },
  notes: {
    type: String
  },
  created_at: Date,
  updated_at: Date
});

/**
* Add the dates on save ( updated_at & created_at )
*/
ImageSchema.pre('save', next => {
  let currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at) this.created_at = currentDate;

  next();
});

module.exports = Image = mongoose.model('image', ImageSchema);

