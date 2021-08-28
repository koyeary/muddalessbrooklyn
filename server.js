const express   = require('express');
const path      = require('path');
const logger    = require('morgan');
const exphbs    = require('express-handlebars');

const app       = express();
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//Set up handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

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

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
