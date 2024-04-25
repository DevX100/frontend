let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;
const prevButton = document.getElementsByid("PrevButton");
const nextButton = document.getElementsByid("nectButton");


function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1; // Wrap around to the last slide
  } else if (index >= totalSlides) {
    index = 0; // Wrap around to the first slide
  }
  // Move the slider frame to show the current slide
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Initial slide
showSlide(currentIndex);
