require("dotenv").config();

const express = require("express");
const favicon = require("serve-favicon");
const connectDB = require("./config/db");
const path = require("path");
const serverless = require("serverless-http");
const logger = require("morgan");
const routes = require("./routes");

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

// Connect Database
connectDB();

//Middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "20mb" }));

// view engine setup
app.set("views", path.join(__dirname, "views"));

//set up handlebars
const exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use(favicon(__dirname + "/public/favicon.ico"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));
app.use("/.netlify/functions/server", express.Router);
//Routes
app.use(routes);

//Listener
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
