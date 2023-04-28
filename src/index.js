import "./css/styles.css";
import Notiflix from "notiflix";
import debounce from "lodash/debounce";
import fetchCountries from "./js/fetchCountries";

const DEBOUNCE_DELAY = 300;
const searchEl = document.querySelector("#search-box");
const countryListEl = document.querySelector("#country-list");
const countryInfoEl = document.querySelector("#country-info");

const debouncedFunction = debounce(event => {
  const searchQuery = event.target.value;
  console.log(searchQuery);
}, DEBOUNCE_DELAY);

searchEl.addEventListener("input", debouncedFunction);
