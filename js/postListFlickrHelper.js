import { getAlbums } from './flickrService.js';

getAlbums((response) => {
    console.log("RESPONSE: " + response);
});
