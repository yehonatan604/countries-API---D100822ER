import { getCountries } from "./services/countries.service.js";
import { createCardsList } from "./services/dom.service.js";

createCardsList();
console.log(await getCountries());