/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteCulinaryContract'

let favoriteRestaurantsCulinary = []

const FavoriteRestaurantCulinaryArray = {

  getRestaurantCulinary (id) {
    if (!id) {
      return
    }

    return favoriteRestaurantsCulinary.find((restaurant) => restaurant.id == id)
  },

  getAllRestaurants () {
    return favoriteRestaurantsCulinary
  },

  putRestaurant (restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurantsCulinary
    if (this.getRestaurantCulinary(restaurant.id)) {
      return
    }

    favoriteRestaurantsCulinary.push(restaurant)
  },

  deleteRestaurant (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurantsCulinary = favoriteRestaurantsCulinary.filter((restaurant) => restaurant.id != id)
  }
}

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurantsCulinary = [])

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantCulinaryArray)
})
