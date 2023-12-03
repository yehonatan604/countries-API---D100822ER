export let likedCountries = [];

export const getData = () => {
    const data = localStorage.getItem('countries');

    if (!data) {
        localStorage.setItem('countries', JSON.stringify(likedCountries));
        data = localStorage.getItem('countries');
    }

    likedCountries = JSON.parse(data);
}

updateData = (data) => {
    localStorage.setItem('countries', JSON.stringify(data));
}
