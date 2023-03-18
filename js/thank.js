const boxRating = document.querySelectorAll(".RateSiet");
const boxRatingGreat = document.querySelector(".boxRating.great");

const heartIcon = document.querySelectorAll(".fa-heart");
boxRating.forEach((element, index) => {
  element.addEventListener("click", () => {
    // element[index].className.toggle("active");
    boxRating[index].classList.toggle("active");
  });
});
boxRatingGreat.addEventListener("click", () => {
  boxRatingGreat.classList.toggle("active");

  heartIcon.forEach((icon, index) => {
    if (boxRatingGreat.classList.contains("active")) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
  setTimeout(() => {
    removeHeart();
  }, 3000);
});

// const remove heart
const removeHeart = () => {
  heartIcon.forEach((icon, index) => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
    } else {
      return;
    }
  });
};
