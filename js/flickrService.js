function FlickrPhoto(title, owner, flickrURL, imageURL) {
    this.title = title;
    this.owner = owner;
    this.flickrURL = flickrURL;
    this.imageURL = imageURL;
}

function FlickrService() {
    this.flickrApiKey = "e62f00df5c9e726baeea4bf05e956f98";
    this.flickrGetSizesURL =  "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1"

    this.getPhotoSizes = function(photoId, callback) {
        var ajaxOptions = {
            type: 'GET',
            url: this.flickrGetSizesURL,
            data: { api_key: this.flickrApiKey, photo_id: photoId }
        };

        $.ajax(ajaxOptions)
            .done(function(data) {
                if (data.stat == "ok") {
                    callback(data.sizes)
                } else {
                    console.log("no data");
                }
            })
            .fail(function(error) {
                console.log("Error!")
                console.log(error);
            });
    }
}

var flickrService = new FlickrService();

function photoByComparingWidth(imgContainerWidth, photoSizes) {
    var photo = "";
    if (imgContainerWidth <= 240) {
        photo = photoSizes.size[3];
    } else if (imgContainerWidth <= 320) {
        photo = photoSizes.size[4];
    } else if (imgContainerWidth <= 500) {
        photo = photoSizes.size[5];
    } else if (imgContainerWidth <= 640) {
        photo = photoSizes.size[6];
    } else if (imgContainerWidth <= 800) {
        photo = photoSizes.size[7];
    } else if (imgContainerWidth <= 1024) {
        photo = photoSizes.size[8];
    } else {
        photo = photoSizes.size[9];
    }
    return photo;
}

function photoByComparingHeight(imgContainerHeight, photoSizes) {
    var photo = ""
    if (imgContainerHeight <= 180) {
        photo = photoSizes.size[3];
    } else if (imgContainerHeight <= 240) {
        photo = photoSizes.size[4];
    } else if (imgContainerHeight <= 375) {
        photo = photoSizes.size[5];
    } else if (imgContainerHeight <= 480) {
        photo = photoSizes.size[6];
    } else if (imgContainerHeight <= 600) {
        photo = photoSizes.size[7];
    } else if (imgContainerHeight <= 768) {
        photo = photoSizes.size[8];
    } else {
        photo = photoSizes.size[9];
    }
    return photo;
}

$('.img-container').each(function(i, imgContainer) {
    var photoID = imgContainer.id;
    flickrService.getPhotoSizes(photoID, function(photoSizes) {
        var imgContainerWidth = imgContainer.offsetWidth;
        var imgContainerHeight = imgContainer.offsetHeight;
        var photo = "";
        if (imgContainerWidth < imgContainerHeight) {
           photo = photoByComparingHeight(imgContainerHeight, photoSizes);
        } else {
           photo = photoByComparingWidth(imgContainerWidth, photoSizes);
        }

        // set lightbox link
        $(imgContainer.children[0]).attr("href", photoSizes.size[9].source);

        // set actual image
        // div background images require at least width or height to be set.
        //   In this case, we have a width of 100% and a height of 'auto', which doesn't render.
        //   The solution is to force a padding of the width to height ratio.
        if ($(imgContainer).hasClass('width100')) {
            $(imgContainer).css('cssText', "padding-top:" + (photo.height/photo.width * 100) + '% !important');
        }
        $(imgContainer).css('background-image', "url('" + photo.source + "')");
    });
});    