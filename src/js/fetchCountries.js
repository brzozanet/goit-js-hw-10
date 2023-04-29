import Notiflix from "notiflix";

const API_URL = "https://restcountries.com/v3.1/name/";
const FILTERS = "?fields=name,capital,population,flags,languages";

export function fetchCountries(countryName) {
  fetch(`${API_URL}${countryName}${FILTERS}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error =>
      Notiflix.Notify.failure("Oops, error fetching data from server")
    );
}

fetchCountries("sw");
fetchCountries("Poland");
