const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(__dirname + '/public/favicon_io/favicon.ico'));

// API and View routes
app.use(routes);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
/* 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build'))); */

//build mode
app.get('*', (req, res) => {
  res.send(path.join(__dirname + '/client/public/index.html'));
});

//Set up handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// catch 404 and forward to error handler
/* app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  }); */

// error handler
// no stacktraces leaked to user unless in development environment
/* app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    })
  }); */
