import { FlickrConfig } from './flickrConfig.js';
import fetch from 'node-fetch';

const BEST_BY_POST_TYPE_CONFIG = (year, thumb1, thumb2, thumb3) =>
    `---
layout:         post
title:          "Best of ${year}"
date:           ${year}-12-31
type:           photo-album
categories:     photo-album
thumbs:         [${thumb1}, 
                ${thumb2}, 
                ${thumb3}
                ]
---

`

const TWO_BY_TWO_TEMPLATE = (photoA, photoB) =>
    (photoB != null) ?
        `{% include photo-story-2x1-50-50.html photo1="${photoA}" photo2="${photoB}" %}`
        :
        `{% include photo-story-2x1-50-50.html photo1="${photoA}" %}`;

String.prototype.format = function () {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);
    }
    return content;
};

const fetchPhotoIds = (albumId, onComplete) => {
    const url = FlickrConfig().getAlbumUrl(albumId);
    fetch(url)
        .then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    if (json.photoset == null) {
                        console.log("Error:" + JSON.stringify(json));
                        return;
                    }
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

const getThumbnails = (photoIds) =>
    photoIds.map((item) => item.thumbnailUrl).slice(0, 3)

const buildPhotoGrid = (photoIds) => {
    const result = [];
    var i = 0;
    while (i < photoIds.length) {
        const photoA = photoIds[i].id;
        const photoB = (i + 1 < photoIds.length) ? photoIds[i + 1].id : null;
        result.push(TWO_BY_TWO_TEMPLATE(photoA, photoB));
        i += 2;
    }
    return result.join("\n");
}

const generateAlbum = (albumId, year) => {
    fetchPhotoIds(
        albumId,
        (response) => {
            const photoGridString = buildPhotoGrid(response.photoIds);

            const thumbnails = getThumbnails(response.photoIds);
            const postConfig = BEST_BY_POST_TYPE_CONFIG(year, thumbnails[0], thumbnails[1], thumbnails[2]);
            console.log(postConfig + photoGridString);
        });
}

generateAlbum('72157648085535294', '2014');