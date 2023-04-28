import Notiflix from "notiflix";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages";

export function fetchCountries() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => Notiflix.Notify.failure("Oops, error fetching data from server"));
}

fetchCountries();
