// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Notifies the backend to load an album into the photo frame queue.
// If the request is successful, the photo frame queue is opened,
// otherwise an error message is shown.
const id = 'APQMm11MtlOJXLs5Rivh_9lBxwKQnSXfodGgCu6LphfbOPZ-k11EmiTm7EjEznFJGCsmHfsiWw3h'
function loadFromAlbum(name, id) {
    // Make an ajax request to the backend to load from an album.
    $.ajax({
      type: 'POST',
      url: '/loadFromAlbum',
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
  }

  $('#galleryButton').on('click', () => {
    loadFromAlbum(id);
  })
  
  