import { countries } from "/data/countries.js";

const DEFAULT_CODES = ["RUB", "THB"]; // 1-karta "Отдаю", 2-karta "Получаю"

function initCurrencyCard(cardElement, defaultCode) {
  if (!cardElement) return;

  const currenciesContainer = cardElement.querySelector(".currencies");
  const activeCurrency = cardElement.querySelector(".active-currency");
  const activeFlag = activeCurrency.querySelector(".flag");
  const activeCode = activeCurrency.querySelector(".code");
  const amountInput = cardElement.querySelector(".amount");

  if (!currenciesContainer || !activeCurrency || !activeFlag || !activeCode) {
    return;
  }

  const currenciesMarkup = countries
    .map(
      (country) => `
        <div class="currency" data-code="${country.code}">
          <img src="${country.flag}" alt="${country.label}" />
          <span>${country.label}</span>
        </div>
      `
    )
    .join("");

  currenciesContainer.innerHTML = currenciesMarkup;

  let currentCountry =
    countries.find((item) => item.code === defaultCode) || countries[0];

  function renderActive() {
    activeFlag.innerHTML = `<img src="${currentCountry.flag}" alt="${currentCountry.label}" />`;
    activeCode.textContent = currentCountry.label;
  }

  function setActiveCurrency(code) {
    const found = countries.find((item) => item.code === code) || countries[0];
    currentCountry = found;
    renderActive();
    formatAmountWithSymbol();
  }

  function toggleDropdown() {
    const isOpen = currenciesContainer.classList.toggle("open");
    activeCurrency.classList.toggle("open", isOpen);
  }

  function formatAmountWithSymbol() {
    if (!amountInput) return;
    const symbol = currentCountry.symbol || currentCountry.code || "";
    const raw = (amountInput.value || "").toString().replace(/[^\d.,]/g, "");

    if (!raw) {
      amountInput.value = "";
      return;
    }

    amountInput.value = `${raw} ${symbol}`;
  }

  function resizeAmountWidth() {
    if (!amountInput) return;
    const base = amountInput.value || amountInput.placeholder || "";
    const length = base.length || 1;
    amountInput.style.width = `${length + 1}ch`;
  }

  // Initial state
  setActiveCurrency(defaultCode);
  resizeAmountWidth();

  activeCurrency.addEventListener("click", () => {
    toggleDropdown();
  });

  currenciesContainer.addEventListener("click", (event) => {
    const currencyEl = event.target.closest(".currency");
    if (!currencyEl) return;

    const code = currencyEl.getAttribute("data-code");
    setActiveCurrency(code);
    toggleDropdown();
  });

  if (amountInput) {
    formatAmountWithSymbol();
    resizeAmountWidth();

    amountInput.addEventListener("input", () => {
      formatAmountWithSymbol();
      resizeAmountWidth();
    });
  }
}

const cards = document.querySelectorAll(".hero-exchanger-card");

initCurrencyCard(cards[0], DEFAULT_CODES[0]); // Отдаю — RUB
initCurrencyCard(cards[1], DEFAULT_CODES[1]); // Получаю — THB
