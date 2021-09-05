const express   = require('express');
const favicon   = require('serve-favicon')
const connectDB = require('./config/db');
const path      = require('path');
const logger    = require('morgan');
const routes    = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;


// Connect Database
connectDB();

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(routes);


// View engine setup
app.set('views', path.join(__dirname, 'views'));

//Set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/favicon.ico'));



//Listener
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

