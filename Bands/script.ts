// Kreiranje interfejsa za tip podataka filma

document.addEventListener('DOMContentLoaded', Sitecode )

async function Sitecode() {
  const movies = await fetchMovieData();
  displayMovieData(movies);
}
interface Oscars{
  num: number;
}



interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  plot: string;
  cast: string[];
  oscars: Oscars[];
}


// Funkcija za učitavanje JSON datoteke
async function fetchMovieData()  {
  try {
    const response = await fetch('./movies.json'); 
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data.movies ;
  } catch (error) {
    console.log('Error fetching movie data:', error);
    return null;
  }
}

// Funkcija za prikaz podataka na stranici
function displayMovieData(movies: Movie[] | null) {
  if (movies) {
    const movieContainer = document.getElementById('movie-container');
    console.log(movies);
    if (movieContainer) {
      movieContainer.innerHTML = '';
      movies.forEach((movie) => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-table');

        const movieData = `
          <div class="movie-data">${movie.id}</div>
          <div class="movie-data">${movie.title}</div>
          <div class="movie-data">${movie.director}</div>
          <div class="movie-data">${movie.year}</div>
          <div class="movie-data">${movie.genre}</div>
          <div class="movie-data">${movie.plot}</div>
          <div class="movie-data">${movie.cast.toString()}</div>
          
          
          <div class="movie-data">
            
          </div>
          <div class="movie-data">${movie.oscars[0].num}</div>
        `;

        movieDiv.innerHTML = movieData;
        movieContainer.appendChild(movieDiv);
      });
    }
  } else {
    const errorMessage = 'Error fetching movie data.';
    console.error(errorMessage);
    alert(errorMessage);
  }
  
    
}
    



