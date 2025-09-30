let slideIndex = 1;
let slideIndexStories = 1;
let slideIndexWireframe = 1;
showSlides(slideIndex);
showSlidesStories(slideIndexStories);
showSlidesWireframe(slideIndexWireframe);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function plusSlidesStories(n) {
  showSlidesStories(slideIndexStories += n);
}

function plusSlidesWireframe(n) {
    showSlidesWireframe(slideIndexWireframe += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function currentSlideStories(n) {
  showSlidesStories(slideIndexStories = n);
}

function currentSlideWireframe(n) {
    showSlidesWireframe(slideIndexWireframe = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    console.log(slides.length);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    console.log(slideIndex - 1);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length != 0) {
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
}

function showSlidesStories(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesStories");
  let dots = document.getElementsByClassName("dotStories");

  console.log(slides.length);
  if (n > slides.length) {slideIndexStories = 1}    
  if (n < 1) {slideIndexStories = slides.length}
  console.log(slideIndexStories - 1);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length != 0) {
    slides[slideIndexStories-1].style.display = "block";
    dots[slideIndexStories-1].className += " active";
  }  
}

function showSlidesWireframe(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesWireframe");
    let dots = document.getElementsByClassName("dotWireframe");
  
    if (n > slides.length) {slideIndexWireframe = 1}    
    if (n < 1) {slideIndexWireframe = slides.length}
    console.log(slideIndexWireframe - 1);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length != 0) {
        slides[slideIndexWireframe-1].style.display = "block";  
        dots[slideIndexWireframe-1].className += " active";
    }
  }