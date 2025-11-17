document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const burgerIcon = burger.querySelector('img[alt="burger"]');
  const closeIcon = burger.querySelector('img[alt="close"]');
  const links = document.querySelector(".header .links");
  const contacts = document.querySelector(".header .contacts");
  const body = document.body;

  // Initially hide close icon
  closeIcon.style.display = "none";

  burger.addEventListener("click", function () {
    const isOpen = links.classList.contains("menu-open");

    if (isOpen) {
      // Close menu
      links.classList.remove("menu-open");
      contacts.classList.remove("menu-open");
      body.classList.remove("menu-open");
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      // Open menu
      links.classList.add("menu-open");
      contacts.classList.add("menu-open");
      body.classList.add("menu-open");
      burgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  });

  // Close menu when clicking on a link
  const menuLinks = links.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      links.classList.remove("menu-open");
      contacts.classList.remove("menu-open");
      body.classList.remove("menu-open");
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1023) {
      body.classList.remove("menu-open");
    }
  });
});
