
// let photoDiv = $('.item-photo');
//
// $(document).ready(function() {
//     setPhotoDimensions(photoDiv);
// });
//
// $(window).resize(function(e) {
//     setPhotoDimensions(photoDiv);
// });
//
// function setPhotoDimensions(photoDiv) {
//     let photoWidth = photoDiv.parent().width() - 10;
//     let photoHeight = photoWidth * .75;
//     photoDiv.css({'width': photoWidth, 'height': photoHeight});
// }


let cardImage = $(".card-img-top img");

cardImage.mouseenter(function() {

  if(this.clientWidth === 225) {
    $(this).css({
      "height": "400px",
      "width": "300px"
    });
  } else {
    alert("in the else");
    $(this).css({
      "height": "300px",
      "width": "400px"
    });
  }

});

cardImage.mouseleave(function() {
  // alert(this.clientWidth);
  if(this.clientWidth === 300) {
    $(this).css({
      "height": "300px",
      "width": "225px"
    });
  } else {
    $(this).css({
      "height": "225px",
      "width": "300px"
    });
  }
});
