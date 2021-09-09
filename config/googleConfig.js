const config = require('config');

const googleConfig = {

  client:  process.env.GOOGLE_CLIENT_ID       || config.get('GOOGLE_CLIENT_ID'),
  secret:  process.env.GOOGLE_SECRET          || config.get('GOOGLE_SECRET'),
  cb:      process.env.GOOGLE_CALLBACK_URL    || config.get('GOOGLE_CALLBACK_URL'),
  albumId: process.env.GOOGLE_ALBUM_ID        || config.get('GOOGLE_ALBUM_ID'),      

  scopes: ['https://www.googleapis.com/auth/photoslibrary.readonly', 'profile'],

  photosToLoad:   150,
  searchPageSize: 100,
  albumPageSize:  50,
  apiEndpoint:    'https://photoslibrary.googleapis.com/v1/mediaItems:search'
  
};


module.exports = googleConfig;
