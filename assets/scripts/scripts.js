let chosenRating = 0;

// implement clickable buttons
const ratingElements = document.querySelectorAll('.rating');
for (const ratingEl of ratingElements) {
  ratingEl.addEventListener('click', function (e) {
    for (const el of ratingElements) {
      el.classList.remove('clickedBtn');
    }
    e.target.classList.add('clickedBtn');
    chosenRating = e.target.textContent;
  });
}

const submitBtn = document.querySelector('.btn');
submitBtn.addEventListener('click', function () {
  // display the thank you box
  const ratingBox = document.querySelector('.rating-state');
  const thankyouBox = document.querySelector('.thankyou-state');
  ratingBox.classList.remove('visible');
  thankyouBox.classList.add('visible');
  // display the chosen rating
  const thankyouCaption = document.querySelector('.thankyou-caption');
  console.log(thankyouCaption);
  thankyouCaption.textContent = `You selected ${chosenRating} out of 5`;
  console.log(thankyouCaption);
});
