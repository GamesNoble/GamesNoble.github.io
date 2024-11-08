const apiKey = '9ecfd7e66acabc26453faf47ed14b140'; 
const movieContainer = document.getElementById('movie-container');
const searchBar = document.getElementById('search-bar');
const movieModal = document.getElementById('movie-modal');
const movieIframe = document.getElementById('movie-iframe');
const fullscreenBtn = document.querySelector('.fullscreen-btn');

function fetchMovies(query = '') {
    let url = query ?
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false` :
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => console.log(error));
}

function displayMovies(movies) {
    movieContainer.innerHTML = '';
    if (movies.length === 0) {
        movieContainer.innerHTML = '<p>No movies found.</p>';
    } else {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie-item');
            movieElement.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h4>${movie.title}</h4>
                    <a href="#" onclick="openMovie('${movie.id}')">Watch</a>
                </div>
            `;
            movieContainer.appendChild(movieElement);
        });
    }
}

function openMovie(movieId) {
    const movieUrl = `https://moviesapi.club/movie/${movieId}`;
    movieIframe.src = movieUrl;
    movieModal.style.display = 'flex';
}

function closeModal() {
    movieModal.style.display = 'none';
    movieIframe.src = '';
}

function toggleFullscreen() {
    if (movieIframe.requestFullscreen) movieIframe.requestFullscreen();
    else if (movieIframe.mozRequestFullScreen) movieIframe.mozRequestFullScreen();
    else if (movieIframe.webkitRequestFullscreen) movieIframe.webkitRequestFullscreen();
    else if (movieIframe.msRequestFullscreen) movieIframe.msRequestFullscreen();
}

function searchMovies() {
    fetchMovies(searchBar.value);
}

fetchMovies();
