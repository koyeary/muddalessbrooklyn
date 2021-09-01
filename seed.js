var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

var imageSeed = [
  {
    description: "Day At The Library",
    image: "/assets/img/gallery/1870Veteran/20-546016_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Forests Overhead",
    image: "/assets/img/gallery/1870Veteran/20-546016_2_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Brick Wall",
    image: "/assets/img/gallery/2291Chelan/genBcs.19-485988_6_0.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Abstract Door In The Wall",
    image: "/assets/img/gallery/2291Chelan/genBcs.19-485988_7_0.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Focused Ring",
    image: "/assets/img/gallery/2291Chelan/genBcs.19-485988_10_0.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Taxi Cab",
    image: "/assets/img/gallery/2291Chelan/genMid.19-485988_5_0.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Building",
    image: "/assets/img/gallery/2291Chelan/genMid.19-485988_8_0.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ethereal Pathway",
    image: "/assets/img/gallery/3374Troy/21-726578_5_2.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Cutting The Ribbon On Opening Day",
    image: "/assets/img/gallery/3374Troy/21-726578_6_2.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Skwad",
    image: "/assets/img/gallery/3374Troy/21-726578_10_2.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Man On Bridge",
    image: "/assets/img/gallery/3374Troy/21-726578_16_2.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Floating Book",
    image: "/assets/img/gallery/3374Troy/21-726578_29_2.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Searching",
    image: "/assets/img/gallery/4521Colbath/21-713678_0.jpe",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Flyers On The Wall",
    image: "/assets/img/gallery/4521Colbath/21-713678_1_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Caution, Wet Floor",
    image: "/assets/img/gallery/4521Colbath/21-713678_2_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Sunset",
    image: "/assets/img/gallery/4521Colbath/21-713678_5_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Museum",
    image: "/assets/img/gallery/4848Eldred/20-667290_6_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Foggy Morning",
    image: "/assets/img/gallery/4848Eldred/20-667290_8_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Look Up",
    image: "/assets/img/gallery/4848Eldred/20-667290_9_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "City",
    image: "/assets/img/gallery/4848Eldred/20-667290_11_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Parking Garage",
    image: "/assets/images/21.jpgassets/img/gallery/4848Eldred/20-667290_13_0.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Giraffe",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2001593535xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "On The Rocks",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2180210667xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Airline Puddle",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2508457245xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Good Boy",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2606054460xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Grooves",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2955387456xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Brick Photo",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m3173426418xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Blue",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m4101572091xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Count The Rings",
    image: "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m4139278364xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Sewing",
    image: "/assets/img/gallery/6930Oporto/balichestlivingroom.jpeg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ice Cream",
    image: "/assets/img/gallery/6930Oporto/dca1829bca01f17b56ec12671ce6ee28l-m1771093754xd-w1020_h770_q80.jpeg",
    rating: 0,
    date: new Date(Date.now())
  }
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
