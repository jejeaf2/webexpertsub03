import FavoriteButtonInitiator from '../../src/scripts/utils/FavoriteInitiatorButton'
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteCulinaryIdb'

const createFavoriteButtonwithRestaurantCulinary = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createFavoriteButtonwithRestaurantCulinary }
