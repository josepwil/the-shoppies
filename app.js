const apiKey = '9be71466';

// get userinput from search form
$('form').on('submit', function(event) {
  event.preventDefault();
  const searchTerm = $(this).find('#search').val()

  // make call to api
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
  .then(res => res.json())
  .then(data => console.log('this is the data: ', data.Search));
})

