/* eslint-disable no-undef */
const assert = require('assert')

// eslint-disable-next-line no-undef
Feature('Favoriting Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited culinary', ({ I }) => {
  I.see('Tidak ada culnary restaurant untuk ditampilkan', '.restaurant-item__not__found')
})

Scenario('favoriting and unfavoriting one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found')
  I.amOnPage('/')

  // Press ENTER in terminal to run the next step
  pause()

  I.seeElement('.contents x')

  const firstCulinary = locate('.contents x').first()
  const firstCulinaryTitle = await I.grabTextFrom(firstCulinary)
  I.click(firstCulinary)

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')

  const favoritedCulinaryTittle = await I.grabTextFrom('.contents x')

  assert.strictEqual(firstCulinaryTitle, favoritedCulinaryTittle)

  I.seeElement('.contents x')

  const favoritedCulinary = locate('.contents x').first()
  I.click(favoritedCulinary)

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found')
})
