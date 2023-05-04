const API_URL = "https://restcountries.com/v3.1/name/";
const FILTERS = "?fields=name,capital,population,flags,languages";

export function fetchCountries(countryName) {
  return fetch(`${API_URL}${countryName}${FILTERS}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status);
  });
}
