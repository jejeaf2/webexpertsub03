/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteCulinaryContract'
import favoriteCulinaryIdb from '../src/scripts/data/favoriteCulinaryIdb'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteCulinaryIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await favoriteCulinaryIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(favoriteCulinaryIdb)
})
