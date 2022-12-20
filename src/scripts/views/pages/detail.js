import UrlParser from '../../routes/urlParser'
import FavoriteButtonPresenter from '../../utils/FavoritePresenterButton'
import FavoriteRestaurantIdb from '../../data/favoriteCulinaryIdb'

const Detail = {
  async render () {
    return `
      <div id="detail">
        <div class="container" id="restaurant-detail"></div>
      </div>
      <div id="favoriteButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detailRestaurant = document.querySelector('#restaurant-detail')
    detailRestaurant.innerHTML = ''
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`)
    const restaurantData = await response.json()
    const showRestaurant = restaurantData.restaurant

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: showRestaurant.id,
        name: showRestaurant.name,
        pictureId: showRestaurant.pictureId,
        city: showRestaurant.city,
        rating: showRestaurant.rating,
        description: showRestaurant.description
      }
    })

    detailRestaurant.innerHTML = `
      <div class="container">
        <div class="image-container">
          <img class="images" src="https://restaurant-api.dicoding.dev/images/medium/${showRestaurant.pictureId}" alt="${showRestaurant.name}" alt='Gambar showRestaurant ${showRestaurant.name}'>
        </div>
        <div class="content">
          <h2 class="text-center">${showRestaurant.name}</h2>
          <h4 class="text-center">Lokasi : ${showRestaurant.address}, ${showRestaurant.city}</h4>
          <h4 class="text-center">Rating : ${showRestaurant.rating}/5</h4>
          <p>${showRestaurant.description}</p>
          <hr>
          <div id="menus">
            <div>
              <h4>Menu Makanan</h4>
              <div id="foods"></div>
            </div>
            <div>
              <h4>Menu Minuman</h4>
              <div id="drinks"></div>
            </div>
          </div>
          <hr>
          <h4>Review Customer</h4>
          <div id="reviews"></div>
        </div>
      </div>
    `

    const foods = document.querySelector('#foods')
    foods.innerHTML = ''
    showRestaurant.menus.foods.forEach((food) => {
      foods.innerHTML += `<p>${food.name}</p>`
    })

    const drinks = document.querySelector('#drinks')
    drinks.innerHTML = ''
    showRestaurant.menus.drinks.forEach((drink) => {
      drinks.innerHTML += `<p>${drink.name}</p>`
    })

    const reviews = document.querySelector('#reviews')
    showRestaurant.customerReviews.forEach((review) => {
      reviews.innerHTML += `<div class="review">
            <h5>${review.name}</h5>
            <div>${review.review}</div>
            <div>${review.date}</div>
          </div>`
    })
  }
}

export default Detail
