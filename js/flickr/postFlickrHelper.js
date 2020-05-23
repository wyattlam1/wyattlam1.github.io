import { FlickrService } from './flickrService.js';

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

$(document).ready(function () {
    $('.img-container').each(function (i, imgContainer) {
        var photoID = imgContainer.id;
        FlickrService.getPhotoSizes(photoID, function (photoSizes) {
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
            if (imgContainerHeight == 0) {
                $(imgContainer).css('cssText', "padding-top:" + (photo.height / photo.width * 100) + '% !important');
            }

            $(imgContainer).attr("data-original", photo.source)
            $(imgContainer).lazyload({
                threshold: 500,
                effect: "fadeIn"
            })
        });
    });
});