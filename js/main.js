document.addEventListener("DOMContentLoaded", function () {
  new Splide("#new-product", {
    perPage: 4,
    perMove: 1,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 4,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
    pagination: false,
  }).mount();
});
