import { createRestaurantItemTemplate } from '../templates/creatorTemplates'

const Home = {
  async render () {
    return `
      <picture>
        <source media="(max-width: 768px)" srcset="./images/hero-image_1-small.jpg">
        <img id="hero-element" src='./images/hero-image_1-large.jpg' alt="Gambar Utama"></img>
      </picture>
      <h1 id="explore-title">Explore Restaurant</h1>
      <div id="explore">
          <div class="container" id="restaurant-content"></div>
      </div>
      `
  },

  async afterRender () {
    const response = await fetch('https://restaurant-api.dicoding.dev/list')
    const restaurantData = await response.json()
    const listRestaurant = document.querySelector('#restaurant-content')

    restaurantData.restaurants.forEach((restaurant) => {
      listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
