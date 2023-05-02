import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="movie" class="movie">Detail Page</div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
