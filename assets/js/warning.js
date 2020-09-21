//Check to see if user has accepted the warning before

// $(document).ready(function() {
window.onpageshow = function() {
  if ( localStorage.getItem('accepted') === null) {
    // $("#myModal").modal('show');
    $('.modal').appendTo("body").modal('show');
  }
  else {
    removeBackdrop();
  }
};

//When user clicks the enter button, add token to localStorage
$("#enter-btn").click(function () {
  localStorage.setItem('accepted', 'true')
  removeBackdrop();
})

$("#leave-btn").click(function () {
  window.location = "https://google.com";
})

function removeBackdrop() {
  $('#warningModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
}
