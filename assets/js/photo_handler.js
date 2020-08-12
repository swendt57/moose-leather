
let photoDiv = $('.item-photo');

$(document).ready(function() {
    setPhotoDimensions(photoDiv);
});

$(window).resize(function(e) {
    setPhotoDimensions(photoDiv);
});

function setPhotoDimensions(photoDiv) {
    let photoWidth = photoDiv.parent().width() - 10;
    let photoHeight = photoWidth * .75;
    photoDiv.css({'width': photoWidth, 'height': photoHeight});
}
