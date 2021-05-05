const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;


Cinema.prototype.getFilmTitles = function(){
  const result = this.films.map((film
    ) => {
    return film['title']
  });
  return result;
};

Cinema.prototype.findByTitle = function(movieTitle){
  const result = this.films.filter((film) => {
      if (film.title === movieTitle) {
        return film;
      }
    });
    return result;
  };  


  Cinema.prototype.filterByGenre = function(movieGenre) {
    const result = this.films.filter((film) => {
      if (film.genre === movieGenre) {
        return film;
      };
    });
    return result
  };

  Cinema.prototype.findByYear = function (movieYear) {
    const result = this.films.filter((film) => {
      if (film.year === movieYear) {
        return film;
      };
    });
    return result;
  };

Cinema.prototype.checkForNoFilmByYear = function (movieYear) {
  function checkNoFilms (film) {
    return film.year === movieYear;
  };
  const result = this.films.some(checkNoFilms);
  return result;
};

// Cinema.prototype.checkForNoFilmByYear = function (movieYear) {
//   const result = this.films.filter((film) => {
//     if (film.year === movieYear) {
//       return film;
//     };
//   });
//   if (result.length === 0 ) {
//     return false;
//   } else {
//     return true;
//   };
// };

// Cinema.prototype.checkOverLength = function (movieLength) {
//   const result = this.films.filter((film) => {
//     if (film.length > movieLength) {
//       return film;
//     };
//   });
//   if (result.length !== this.films.length) {
//     return true;
//   } else {
//     return false;
//   };
// };

// Cinema.prototype.checkOverLength = function (movieLength) {
//   const result = this.films.every((filmLength, ) => {


//   })
// };

Cinema.prototype.checkOverLength = function (movieLength) {
  function checkOver(film) {
    return film.length > movieLength;
  };
  const result = this.films.every(checkOver);
  return result;
};

Cinema.prototype.totalRunTime = function () {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  },0);
  return result
};