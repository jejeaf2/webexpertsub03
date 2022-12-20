import FavoriteRestaurantIdb from '../data/favoriteCulinaryIdb'
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/creatorTemplates'

const FavoriteButtonInitiator = {
  async init ({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited()
    } else {
      this._renderFavorite()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderFavorite () {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate()

    const favoriteButton = document.querySelector('#favoriteButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderFavorited () {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate()

    const favoriteButton = document.querySelector('#favoriteButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default FavoriteButtonInitiator
