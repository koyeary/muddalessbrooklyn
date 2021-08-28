module.exports = app => {

    const application = require('./routes/application');
    const failure = require('./routes/failure');
    const mail = require('./routes/transporter');

    app.use('/', application);
    app.use('/failure', failure);
    app.use('/mail', mail);

}