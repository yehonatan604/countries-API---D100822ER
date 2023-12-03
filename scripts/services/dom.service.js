import { countries } from "./countries.service.js";

const searchInput = document.getElementById('searchInput');
const cards = document.getElementById('cards');

const createCard = (country) => {
    const card = document.createElement('div');
    card.className = 'card shadow rounded m-2 col-md-3 col-sm-12';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-top img mt-3 border shadow rounded';
    cardImg.src = country.flags.png;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h4');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const population = document.createElement('p');
    population.className = 'card-text';
    population.textContent = `population: ${country.population}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center mb-2';

    const heart = document.createElement('i');
    heart.className = 'fa fa-heart';

    card.appendChild(cardImg);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(population);

    card.appendChild(cardBody);

    cardFooter.appendChild(heart);

    card.appendChild(cardFooter);

    cards.appendChild(card);
}

export const createCardsList = () => {
    for (const item of countries) {
        createCard(item);
    }
}

