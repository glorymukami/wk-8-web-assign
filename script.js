let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change every 4s
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}
