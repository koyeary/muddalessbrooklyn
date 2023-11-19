const mongoose = require("mongoose");

//const db = process.env.MONGO_URI;

const db =
  "mongodb+srv://new-user_84:g6GLSzIg68IPUHp2@cluster0.6foyl.mongodb.net/ksrdesign?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
