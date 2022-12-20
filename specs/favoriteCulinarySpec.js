/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories'
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteCulinaryIdb'

describe('Favoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  beforeEach(() => {
    addFavoriteButtonContainer()
  })

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 })

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy()
  })

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 })

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 })

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }])

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({})

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
