const createCulinaryTemplate = (restaurant) => `
  <div class="contents">
    <img class="images lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" alt='Gambar Restaurant ${restaurant.name}'>
    <a href="/#/detail/${restaurant.id}" class="text-center contents-header">${restaurant.name}</a>
    <h4 class="text-center">Lokasi : ${restaurant.city}</h4>
    <h4 class="text-center">Rating : ${restaurant.rating}/5</h4>
    <p>${restaurant.description}</p>
  </div>
`

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createCulinaryTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate
}
