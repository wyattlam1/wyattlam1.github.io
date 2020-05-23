const FLICKR_API_KEY = "e62f00df5c9e726baeea4bf05e956f98";
const WYATTLAM_USER_ID = '95913990@N07';

const FlickrConfig = () => {

    // API Docs: https://www.flickr.com/services/api/flickr.photos.getSizes.html
    const getPhotoSizesUrl = (photoId) => {
        const url = new URL("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1");
        const params = {
            'api_key': FLICKR_API_KEY,
            'photo_id': photoId,
        };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return url;
    }

    // API Docs: https://www.flickr.com/services/api/flickr.photosets.getPhotos.htm
    const getAlbumUrl = (photoSetId) => {
        const url = new URL('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&format=json&nojsoncallback=1');
        const params = {
            'api_key': FLICKR_API_KEY,
            'user_id': WYATTLAM_USER_ID,
            'photoset_id': photoSetId,
            'privacy_filter': '1',
            'extras': 'url_s',
        }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return url;
    }

    return {
        getPhotoSizesUrl,
        getAlbumUrl,
    };
};

export { FlickrConfig };