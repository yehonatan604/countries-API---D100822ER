export let likedCountries = [];

export const getData = () => {
    const data = localStorage.getItem('countries');

    if (!data) {
        localStorage.setItem('countries', JSON.stringify(likedCountries));
        data = localStorage.getItem('countries');
    }

    likedCountries = JSON.parse(data);
}

export const updateData = (countryName) => {
    if (likedCountries.includes(countryName)) {
        let filtered = likedCountries.filter((item) => {
            return item != countryName;
        })
        likedCountries = filtered;
    } else {
        likedCountries.push(countryName);
    }
    localStorage.setItem('countries', JSON.stringify(likedCountries));
}
