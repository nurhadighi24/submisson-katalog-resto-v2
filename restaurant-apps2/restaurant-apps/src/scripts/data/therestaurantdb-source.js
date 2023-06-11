import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async homePages() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const result = await response.json();
    return result.restaurant;
  }
}

export default TheRestaurantDbSource;
