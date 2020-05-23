import { FlickrService } from './flickrService.js';

const twoByTwoTemplate = '{% include photo-story-2x1-50-50.html photo1="{0}" photo2="{1}" %}'

String.prototype.format = function () {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);
    }
    return content;
};

FlickrService.getAlbum('72157675078787323', (response) => {
    const photoIds = response.photoIds;
    const result = [];
    var i = 0;
    while (i < photoIds.length) {
        if (i + 1 < photoIds.length) {
            result.push(twoByTwoTemplate.format(photoIds[i].id, photoIds[i + 1].id));
        } else {
            result.push(twoByTwoTemplate.format(photoIds[i].id, "0"));
        }
        i += 2;
    }


    console.log(result.join("\n"));
});
