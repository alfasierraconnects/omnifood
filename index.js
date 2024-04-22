document.addEventListener("DOMContentLoaded", function () {
  const btnMobileNav = document.querySelector(".btn-mobile-nav");
  const mainNav = document.querySelector(".main-nav");
  const header = document.querySelector(".header");

  // Toggle mobile nav visibility
  btnMobileNav.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click event from propagating to the document
    mainNav.classList.toggle("nav-open");
    header.classList.toggle("nav-open");
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mainNav.contains(event.target) &&
      !btnMobileNav.contains(event.target) &&
      mainNav.classList.contains("nav-open")
    ) {
      mainNav.classList.remove("nav-open");
      header.classList.remove("nav-open");
    }
  });
});
