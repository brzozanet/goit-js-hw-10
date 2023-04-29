import "./css/styles.css";
import Notiflix from "notiflix";
import debounce from "lodash/debounce";
import fetchCountries from "./js/fetchCountries";

const DEBOUNCE_DELAY = 300;
const searchEl = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list");
const countryInfoEl = document.querySelector(".country-info");

const displayCountry = country => {
  const { name, capital, population, languages, flags } = country;
  const languagesList = languages.map(language => language.name).join(", ");
  const countryInfo = `
    <div class="country-info__flag">
      <img src="${flags.png}" alt="${name.common}" width="300">
    </div>
    <div class="country-info__text">
      <h2 class="country-info__name">${name.common}</h2>
      <p class="country-info__capital"><b>Capital:</b> ${capital}</p>
      <p class="country-info__population"><b>Population:</b> ${population}</p>
      <p class="country-info__languages"><b>Languages:</b> ${languagesList}</p>
    </div>
  `;
  countryInfoEl.innerHTML = countryInfo;
  console.log(countryInfo);
};

displayCountry({
  name: { common: "Poland" },
  capital: "Warsaw",
  population: 38413000,
  languages: [{ name: "Polish" }],
  flags: { png: "https://flagcdn.com/w320/pl.png" },
});


const debouncedFunction = debounce(event => {
  const searchQuery = event.target.value.trim();
  console.log(searchQuery);
}, DEBOUNCE_DELAY);

searchEl.addEventListener("input", debouncedFunction);
