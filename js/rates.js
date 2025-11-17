const rateRows = [
  {
    code: "RUB",
    label: "RUB",
    flag: "/assets/icons/ru.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "USDT",
    label: "USDT",
    flag: "/assets/icons/usdt.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "BTC",
    label: "BTC",
    flag: "/assets/icons/btc.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "KZT",
    label: "KZT",
    flag: "/assets/icons/kz.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "BYN",
    label: "BYN",
    flag: "/assets/icons/bl.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "AZN",
    label: "AZN",
    flag: "/assets/icons/az.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "AMD",
    label: "AMD",
    flag: "/assets/icons/ar.svg",
    give: "605.23",
    get: "606.07",
  },
  {
    code: "UZS",
    label: "UZS",
    flag: "/assets/icons/uz.svg",
    give: "605.23",
    get: "606.07",
  },
];

const ratesTableBody = document.querySelector("#rates-table-body");

if (ratesTableBody) {
  ratesTableBody.innerHTML = rateRows
    .map(
      (row) => `
      <div class="rates-table-body-row">
        <div class="rates-table-body-cell">
          <img src="${row.flag}" alt="${row.code}" />
          ${row.label}
        </div>
        <div class="rates-table-body-cell">${row.give}</div>
        <div class="rates-table-body-cell">${row.get}</div>
      </div>
    `,
    )
    .join("");
}


