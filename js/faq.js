document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const title = item.querySelector(".faq-item-title");
    const description = item.querySelector(".faq-item-description");
    const dropdownIcon = item.querySelector(".dropdown img");

    title.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all FAQ items first
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherDescription = otherItem.querySelector(
            ".faq-item-description"
          );
          const otherDropdownIcon = otherItem.querySelector(".dropdown img");

          otherItem.classList.remove("active");
          otherDescription.style.maxHeight = "0";
          otherDescription.style.opacity = "0";
          otherDropdownIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle clicked item
      if (isActive) {
        item.classList.remove("active");
        description.style.maxHeight = "0";
        description.style.opacity = "0";
        dropdownIcon.style.transform = "rotate(0deg)";
      } else {
        item.classList.add("active");
        description.style.maxHeight = description.scrollHeight + "px";
        description.style.opacity = "1";
        dropdownIcon.style.transform = "rotate(180deg)";
      }
    });

    // Initialize based on active class
    if (item.classList.contains("active")) {
      description.style.maxHeight = description.scrollHeight + "px";
      description.style.opacity = "1";
      dropdownIcon.style.transform = "rotate(180deg)";
    } else {
      description.style.maxHeight = "0";
      description.style.opacity = "0";
      dropdownIcon.style.transform = "rotate(0deg)";
    }
  });
});
