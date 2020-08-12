
$(document).ready(function() {
    determineTotalWidth();
});

$(window).resize(function(e) {
    determineTotalWidth()
});

function determineTotalWidth() {
    let card = $('.card-container');
    let blockWidth = $('.card-block').width();
    let cardWidth = card.width();
    let cardCount = card.length;

    if(cardCount * cardWidth >= blockWidth) {
        $('.cart-total').css('width', blockWidth - 30);
    } else {
        $('.cart-total').css('width', (cardCount * cardWidth) - 30);
    }



}

/* screen width 768 sm, 992 md, 1200 lg, */
