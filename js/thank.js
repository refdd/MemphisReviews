const boxRating = document.querySelectorAll(".boxRating");
boxRating.forEach((element, index) => {
  element.addEventListener("click", () => {
    // element[index].className.toggle("active");
    boxRating[index].classList.toggle("active");
  });
});
