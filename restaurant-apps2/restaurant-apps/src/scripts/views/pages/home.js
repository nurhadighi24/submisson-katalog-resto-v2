import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Home Page</h2>
            <div id="movies" class="movies">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homePages();
    const restaurantsContainer = document.querySelector('#movies');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
