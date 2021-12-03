// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'Jurassic Park',
    year: 2000,
    director: 'Steven Spielberg',
    duration: '2h 7min',
    genre: ['Adventure', 'Sci-Fi', 'Thriller'],
    score: 8.1
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'Indiana Jones and the Last Crusade',
    year: 1989,
    director: 'Steven Spielberg',
    duration: '2h 7min',
    genre: ['Action', 'Adventure', 'Fantasy'],
    score: 8.3
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'Catch Me If You Can',
    year: 2002,
    director: 'Steven Spielberg',
    duration: '2h 21min',
    genre: ['Biography', 'Crime', 'Drama'],
    score: 8.1
  }
];

function getAllDirectors(movies) {
  const directors = [];
  movies.forEach(movie => directors.push(movie.director));

 return directors;
}
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie => ((movie.director === 'Steven Spielberg')));
  const spielbergDramaMovies = spielbergMovies.filter(spielbergMovie => ((spielbergMovie.genre.includes('Drama'))));
  return spielbergDramaMovies.length;
}

// console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const definedScoresMovies = movies.filter(movie => ((movie.score)));
  const scores = [];

 console.log(definedScoresMovies);

  definedScoresMovies.forEach(movie => scores.push(movie.score));

  const average = (scores.reduce((acc, curr) => acc + curr)) / movies.length;
  
  return  Math.round(average*100)/100;
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => ((movie.genre.includes('Drama'))));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  let movieByYear = movies.reduce(function (previous, current) {
    return previous < current;
  }, []);
  console.log(movieByYear);
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
