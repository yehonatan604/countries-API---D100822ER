export const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return data;
}

const countriesFull = await getCountries();
export let countries = [...countriesFull];