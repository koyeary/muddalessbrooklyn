const config = require('config');

const auth = {

  client: process.env.GOOGLE_CLIENT_ID || config.get('GOOGLE_CLIENT_ID'),
  secret: process.env.GOOGLE_SECRET    || config.get('GOOGLE_SECRET'),
  callback:
    process.env.GOOGLE_CALLBACK_URL    || config.get('GOOGLE_CALLBACK_URL'),

  scopes: ['https://www.googleapis.com/auth/photoslibrary.readonly', 'profile'],

  photosToLoad: 150,
  searchPageSize: 100,
  albumPageSize: 50,
  apiEndpoint: 'https://photoslibrary.googleapis.com'
  
};


module.exports = auth;
