// script.js

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const apiDataContainer = document.getElementById('apiDataContainer');

searchButton.addEventListener('click', fetchAPI);

async function fetchAPI() {
  const searchQuery = searchInput.value;

  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${searchQuery}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '50ea460c65msh9b251d8a5747921p1204a7jsn2eb5e50e7816',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Clear previous results
    apiDataContainer.innerHTML = '';

    // Display each movie
    if (data && data.d && data.d.length > 0) {
      data.d.forEach(movie => {
        // Create elements for movie data
        const movieContainer = document.createElement('div');
        const titleElement = document.createElement('h2');
        const imageElement = document.createElement('img');

        // Set movie data
        titleElement.textContent = movie.l;
        imageElement.src = movie.i && movie.i.imageUrl ? movie.i.imageUrl : '';
        imageElement.alt = movie.l;

        // Apply styles to movie container
        movieContainer.classList.add('movie-container');

        // Apply styles to title element
        titleElement.classList.add('movie-title');

        // Apply styles to image element
        imageElement.classList.add('movie-image');

        // Append elements to container
        movieContainer.appendChild(titleElement);
        movieContainer.appendChild(imageElement);

        // Append container to API data container
        apiDataContainer.appendChild(movieContainer);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
const movies = [
  { title: "Movie 1", image: "movie1.jpg" },
  { title: "Movie 2", image: "movie2.jpg" },
  { title: "Movie 3", image: "movie3.jpg" },
  // Add more movie objects as needed
];

const moviesContainer = document.getElementById("movies-container");

// Create movie cards and add them to the container
movies.forEach((movie) => {
  const movieCard = createMovieCard(movie.title, movie.image);
  moviesContainer.appendChild(movieCard);
});

// Function to create a movie card
function createMovieCard(title, image) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  const movieImage = document.createElement("img");
  movieImage.src = image;
  movieImage.alt = title;
  movieCard.appendChild(movieImage);

  const movieTitle = document.createElement("h3");
  movieTitle.textContent = title;
  movieCard.appendChild(movieTitle);

  return movieCard;
}





function openMenu() {
document.body.classList += ' menu--open'
}

function closeMenu() {
    document.body.classList.remove('menu--open')
    }