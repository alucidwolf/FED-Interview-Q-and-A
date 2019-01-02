/* jslint node: true*/
"use strict";

function MarvelMovies(movieName, releaseYear) {
    this.movieName = movieName;
    this.releaseYear = releaseYear;
}

MarvelMovies.prototype.output = function () {
    return "Movie: " + this.movieName + " was release in " + this.releaseYear;
}

var avengers = new MarvelMovies("Avengers", 2012);

console.log(avengers.output());
