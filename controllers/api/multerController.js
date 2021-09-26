/*  const api    = require('axios');
const config = require('config');

const albumId = process.env.GOOGLE_ALBUM_ID || config.get('GOOGLE_ALBUM_ID');

module.exports = {
    loadFromAlbum: async ( req, res ) => {
        
        //const scopes = 'https://www.googleapis.com/auth/photoslibrary.readonly';
       try {           
           let data = await api.get(`/v1/albums/${albumId}`);
           return res.status(200).json({ data });
       } catch (err) {
           console.error(err);
    }
    
},

//const id = 'APQMm11MtlOJXLs5Rivh_9lBxwKQnSXfodGgCu6LphfbOPZ-k11EmiTm7EjEznFJGCsmHfsiWw3h'

    getAll: () => {

    }
    /* showLoadingDialog();
    // Make an ajax request to the backend to load from an album.
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/auth/photoslibrary.readonly',
      dataType: 'json',
      data: {albumId: id, title: 'ksrAPI'},
      success: (data) => {
        console.log('Albums imported:' + JSON.stringify(data.parameters));
        if (data.photos && data.photos.length) {
          // Photos were loaded from the album, open the photo frame preview
          // queue.
          window.location = '/';
        } else {
          // No photos were loaded. Display an error.
          handleError('Couldn\'t import album', 'Album is empty.');
        }
        hideLoadingDialog();
      },
      error: (data) => {
        handleError('Couldn\'t import album', data);
      }
    }); 
  } */