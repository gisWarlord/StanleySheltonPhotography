/*********************** Slid show controls *********************** */
var slideIndex = 1;

window.onloadend = function() {showSlides(slideIndex)};

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
/************************************************************** */

// Updates the Year of the copyright in the footer
function setCopyrightDate(){
    year = new Date().getFullYear();
    document.write(year);
  }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the 'Top' button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;            // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Display a message when the Send button is clicked
$("#btnSend").click(function(){
  $("#frmMessage").fadeIn();
  $("#frmMessage").html("This Feature is Under Construction");
  $("#frmMessage").delay(4000).fadeOut();
});

// Reset the form when the modal form is closed
$('#modal-email').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})