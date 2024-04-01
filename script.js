const ratingEls = document.querySelectorAll(".rating-el");
const buttonEl = document.getElementById("button-el");
const givenRating = document.getElementById("given-rating");
let rate = "";
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thankyou-container");

const selectRating = (event) => {
  rate = event.target.textContent;
  givenRating.innerText = rate;
  const computedStyle = getComputedStyle(document.documentElement);
  event.target.style.backgroundColor =
    computedStyle.getPropertyValue('--light-grey');
  event.target.style.color = computedStyle.getPropertyValue('--white');
  ratingEls.forEach((el) => {
    if (el !== event.target) {
      el.style.backgroundColor = computedStyle.getPropertyValue("--very-dark-blue");
      el.style.color = computedStyle.getPropertyValue("--light-grey");
    }
  })
};

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", selectRating);
});

const thankYou = () => {
  if (rate != "") {
      ratingContainer.classList.add('hidden');
      thankYouContainer.classList.remove('hidden');
  }
}

buttonEl.addEventListener("click", thankYou);