document.addEventListener("DOMContentLoaded", function () {
  const exchangeButtons = document.querySelectorAll(".exchange-button");

  exchangeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      exchangeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
