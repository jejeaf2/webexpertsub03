/* eslint-disable no-undef */
function itActsAsFavoriteRestaurantCulinaryModel (favoriteRestaurantCulinary) {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurantCulinary.putRestaurant({ id: 1 })
    favoriteRestaurantCulinary.putRestaurant({ id: 2 })

    expect(await favoriteRestaurantCulinary.getRestaurant(1))
      .toEqual({ id: 1 })
    expect(await favoriteRestaurantCulinary.getRestaurant(2))
      .toEqual({ id: 2 })
    expect(await favoriteRestaurantCulinary.getRestaurant(3))
      .toEqual(undefined)
  })

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurantCulinary.putRestaurant({ aProperty: 'property' })

    expect(await favoriteRestaurantCulinary.getAllRestaurants())
      .toEqual([])
  })

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurantCulinary.putRestaurant({ id: 1 })
    favoriteRestaurantCulinary.putRestaurant({ id: 2 })

    expect(await favoriteRestaurantCulinary.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 }
      ])
  })

  it('should remove favorite restaurant', async () => {
    favoriteRestaurantCulinary.putRestaurant({ id: 1 })
    favoriteRestaurantCulinary.putRestaurant({ id: 2 })
    favoriteRestaurantCulinary.putRestaurant({ id: 3 })

    await favoriteRestaurantCulinary.deleteRestaurant(1)

    expect(await favoriteRestaurantCulinary.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 }
      ])
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurantCulinary.putRestaurant({ id: 1 })
    favoriteRestaurantCulinary.putRestaurant({ id: 2 })
    favoriteRestaurantCulinary.putRestaurant({ id: 3 })

    await favoriteRestaurantCulinary.deleteRestaurant(4)

    expect(await favoriteRestaurantCulinary.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ])
  })
}

export { itActsAsFavoriteRestaurantCulinaryModel }
