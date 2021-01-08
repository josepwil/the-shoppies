const apiKey = '9be71466';

// helper functions
const createMovieElement = function(movieObj) {
  const $markup = $(`
  <li id=${movieObj.imdbID}>${movieObj.Title} (${movieObj.Year})</li>
  <button>Nominate</button>
  `);
  return $markup;
}

// get userinput from search form
$('form').on('submit', function(event) {
  event.preventDefault();
  const searchTerm = $(this).find('#search').val()

  // make call to api
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
  .then(res => res.json())
  .then(data => {
    const movieArray = data.Search;
    // empty out existing results
    $('#search-results').empty();
    // render new results
    for (let movie of movieArray) {
      const $movie = createMovieElement(movie);
      $('#search-results').append($movie);
    }
  });
})


