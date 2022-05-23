"use strict";
const form = document.forms.form;
const contentP = document.querySelector(".coversion-text");
const switchBtn = document.querySelector(".bi-arrow-down-up");
const currencyHTMLEntities = {
  ils: "&#8362;",
  usd: "&dollar;",
  aud: "AU&dollar;",
  gbp: "&pound;",
  eur: "&euro;",
};
const showInDom = (amount, currency) => {
  contentP.innerHTML = "";
  contentP.innerHTML = `${amount} ${currencyHTMLEntities[currency]}`;
};
const convertCurrency = async (from, to, amount) => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/latest/${from}`
    );
    const data = await response.json();
    const convertedValue = data.conversion_rates[to.toUpperCase()];
    const finalCalculation = (convertedValue * Number(amount)).toFixed(2);
    showInDom(finalCalculation, to);
  } catch (err) {
    console.error(`There was an error! ${err}`);
  }
};
const getFormData = (e) => {
  e.preventDefault();
  const [from, to, amount] = new FormData(form);
  convertCurrency(from[1], to[1], amount[1]);
};
form.addEventListener("submit", getFormData);
switchBtn.addEventListener("click", function (e) {
  const fromSelect = document.forms.form.selectFrom;
  const toSelect = document.forms.form.selectTo;
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  getFormData(e);
});
