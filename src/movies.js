// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = [
  {
    title: 'Snatch',
    year: 2000,
    director: 'Guy Ritchie',
    duration: '1h 44min',
    genre: ['Comedy', 'Crime'],
    score: 8.3
  },
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
    title: 'Gladiator',
    year: 2000,
    director: 'Ridley Scott',
    duration: '2h 35min',
    genre: ['Action', 'Adventure', 'Drama'],
    score: 8.5
  },
  {
    title: 'Memento',
    year: 2000,
    director: 'Christopher Nolan',
    duration: '1h 53min',
    genre: ['Mystery', 'Thriller'],
    score: 8.5
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
  },
  {
    title: 'Faa yeung nin wa',
    year: 2000,
    director: 'Kar-Wai Wong',
    duration: '1h 38min',
    genre: ['Drama', 'Romance'],
    score: 8.1
  }
];

// const moviesArr = [
//   { title: 'aab' },
//   { title: 'bab' },
//   { title: 'acb' },
//   { title: 'aaa' },
//   { title: 'bbb' },
//   { title: 'anc' },
//   { title: 'kns' },
//   { title: 'zds' },
//   { title: 'pow' },
//   { title: 'gda' },
//   { title: 'res' },
//   { title: 'ter' },
//   { title: 'bca' },
//   { title: 'ccc' },
//   { title: 'bbt' },
//   { title: 'qas' },
//   { title: 'kmn' },
//   { title: 'frt' },
//   { title: 'afb' },
//   { title: 'agb' },
//   { title: 'apo' },
//   { title: 'poa' },
//   { title: 'cdf' },
//   { title: 'sea' },
//   { title: 'lom' },
//   { title: 'acs' },
//   { title: 'qas' },
//   { title: 'mns' },
//   { title: 'bvc' },
//   { title: 'gha' },
//   { title: 'lkj' },
//   { title: 'era' },
//   { title: 'ert' },
//   { title: 'tex' },
//   { title: 'zas' },
//   { title: 'pol' }
// ];

function getAllDirectors(movies) {
  const directors = [];

  movies.map(movie => {
    directors.push(movie.director)
  })
  return directors;
}
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie => ((movie.director === 'Steven Spielberg') && movie.genre.includes('Drama')));
  return spielbergMovies.length;
}
// console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const definedScoresMovies = movies.filter(movie => ((movie.score)));
  const scores = [];
  //console.log(definedScoresMovies);
  definedScoresMovies.forEach(movie => scores.push(movie.score));
  const average = (scores.reduce((acc, curr) => acc + curr)) / movies.length;

  return Math.round(average * 100) / 100;
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => ((movie.genre.includes('Drama'))));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let movieByYear = [...movies];

  movieByYear.sort(function (previous, current) {
    if (previous.year === current.year) {
      return previous.title.localeCompare(current.title);
    } else {
      return previous.year - current.year;
    }
  });
  return movieByYear;
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let twentyFirstsMoviesByTitle = [...movies];

  if (twentyFirstsMoviesByTitle.length > 0) {
    twentyFirstsMoviesByTitle.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    })
  }
  for (let movie in twentyFirstsMoviesByTitle) {
      twentyFirstsMoviesByTitle[movie] = twentyFirstsMoviesByTitle[movie].title;
  }
  twentyFirstsMoviesByTitle.splice(20);

  return twentyFirstsMoviesByTitle;
}

//console.log(orderAlphabetically(moviesArr));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let updatedMovies = [...movies];
  updatedMovies.map(function (movie) {
    let HoursAndMinutes = movie.duration.split(" ");
    HoursAndMinutes[0] = parseInt(HoursAndMinutes[0], 10) * 60;
    HoursAndMinutes[1] = parseInt(HoursAndMinutes[1], 10);
    movie.duration = HoursAndMinutes[0] + HoursAndMinutes[1];
  })
  return updatedMovies;
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
