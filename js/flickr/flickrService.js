//import fetch from 'node-fetch';

const FLICKR_API_KEY = "e62f00df5c9e726baeea4bf05e956f98";
const WYATTLAM_USER_ID = '95913990@N07';
const BEST_OF_ALBUMS = {
    2016: "72157675078787323"
};

const FlickrService = function () {
    const getPhotoSizes = function (photoId, callback) {
        const url = new URL("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1");
        const params = {
            'api_key': FLICKR_API_KEY,
            'photo_id': photoId,
        };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        callback(json.sizes);
                    });
                } else {
                    console.log(response);
                }
            });
    }

    // API Docs: https://www.flickr.com/services/api/flickr.photosets.getPhotos.htm
    const getAlbum = function (photoSetId, onComplete) {
        const url = new URL('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&format=json&nojsoncallback=1');
        const params = {
            'api_key': FLICKR_API_KEY,
            'user_id': WYATTLAM_USER_ID,
            'photoset_id': photoSetId,
            'privacy_filter': '1',
            'extras': 'url_s',
        }

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        onComplete({
                            title: json.photoset.title,
                            photoIds: json.photoset.photo.map((photo) => {
                                return {
                                    id: photo.id,
                                    thumbnailUrl: photo.url_s
                                }
                            }),
                        });
                    });
                } else {
                    console.log(response);
                }
            });
    }

    return {
        getPhotoSizes,
        getAlbum,
    };
}();

export { FlickrService };