history.scrollRestoration = "manual";

function handleRadio() {
  let w1 = document.getElementById("radio-1");
  let w2 = document.getElementById("radio-2");
  let w3 = document.getElementById("radio-3");
  if (w1.checked) {
    document.getElementById("section1").style.backgroundImage =
      "url(../img/montain1.jpg)";
  } else if (w2.checked) {
    document.getElementById("section1").style.backgroundImage =
      "url(../img/montain2.jpg)";
  } else if (w3.checked) {
    document.getElementById("section1").style.backgroundImage =
      "url(../img/montain3.jpg)";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "inline-flex";
}
