// Array of movie ratings
var movieScores = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
var scores = [];
// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];
// Starting a rating count

for (var sum = 0; sum < movieScores.length; sum++) {
  if (movieScores[sum] > 7) {
    goodMovieScores.push(movieScores[sum]);
  } else if (movieScores[sum] > 5) {
    okMovieScores.push(movieScores[sum]);
  } else {
    badMovieScores.push(movieScores[sum]);
  }
}
for (var sum = 0; sum < goodMovieScores.length; sum++) {
  console.log("GOOD MOVIES:");
  console.log(goodMovieScores[sum]);
}

for (var sum = 0; sum < okMovieScores.length; sum++) {
  console.log("OK MOVIES:");
  console.log(okMovieScores[sum]);
}
for (var sum = 0; sum < badMovieScores.length; sum++) {
  console.log("BAD MOVIES:");
  console.log(badMovieScores[sum]);
}
var g = goodMovieScores.length;
var o = okMovieScores.length;
var b = badMovieScores.length;
var n = 0;

for (var sum = 0; sum < movieScores.length; sum++) {
  n = movieScores[sum] + n;
}
var avg = n / movieScores.length;
console.log("There are ", goodMovieScores.length, "GOOD movies");
console.log("There are ", okMovieScores.length, "OK movies");
console.log("There are ", badMovieScores.length, "BAD movies");

console.log("The average movie score is ", avg);
