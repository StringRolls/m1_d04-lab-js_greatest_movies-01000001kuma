// The `movies` array from the file `src/data.js`.
const movies = require('./data');
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies.map((movies) =>{
  return `${movies.director}`
})
//console.log(getAllDirectors);

let uniqueDirectors = [];
getAllDirectors.forEach((element) => {
  if (!uniqueDirectors.includes(element)){
    uniqueDirectors.push(element);
  }
});

console.log(uniqueDirectors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const getDramas = movies.filter(onlyDrama => {
  return onlyDrama.director.includes("Steven Spielberg") && onlyDrama.genre.includes("Drama") ;
  });
  return getDramas.length;
}
console.log(`The best Steven Spielberg's drama movies are ${howManyMovies(movies)} in the top of 250º list`);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function avgScore(data){
  const scoreSum = data.reduce((aScore, currentMovie) =>
  {
    return aScore + currentMovie.score;
  }, 0);
  let total = scoreSum / data.length;
  return total.toFixed(2);
};
console.log(avgScore(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(avgOfDrama) {

  let getDramas = avgOfDrama.filter(onlyDrama =>  onlyDrama.genre.includes("Drama")); 

    const scoreSum = getDramas.reduce((aScore, currentMovie) =>
    {
      return aScore + currentMovie.score;
    }, 0);
    let total = scoreSum / avgOfDrama.length;
    return total.toFixed(2);

}

console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(sortingYear) {

  const sorYear = sortingYear.sort(function (a,b) {
    return a.year - b.year;
  })
  return sorYear.reverse()
;}

console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alfabet) {

  const sortAlfa = alfabet.sort (function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  })
  
  const result = sortAlfa.splice(0,20)
   
  return result;

}

  console.log(orderAlphabetically(movies))





















// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



