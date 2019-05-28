function setCopyrightDate(){
    // Updates the Year of the copyright in the footer
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;            // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}  
