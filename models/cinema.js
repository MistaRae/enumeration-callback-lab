const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;


Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map((film
  ) => {
    return film['title']
  });
  return result;
};

Cinema.prototype.searchByProperty = function (property, propertyValue) {
  const result = this.films.filter((film) => {
    if (film[property] === propertyValue) {
      return film;
    }
  });
  return result;
};

Cinema.prototype.findByTitle = function (movieTitle) {
  const result = this.searchByProperty('title', movieTitle);
  return result;
};


Cinema.prototype.filterByGenre = function (movieGenre) {
  const result = this.searchByProperty('genre', movieGenre);
  return result;
};

Cinema.prototype.findByYear = function (movieYear) {
  const result = this.searchByProperty('year', movieYear);
  return result;
};

Cinema.prototype.checkForNoFilmByYear = function (movieYear) {
  function checkFilmInYear(film) {
    return film.year === movieYear;
  };
  const result = this.films.some(checkFilmInYear);
  return result;
};

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
  }, 0);
  return result
};

Cinema.prototype.searchByProperty = function (property, propertyValue) {
  const result = this.films.filter((film) => {
    if (film[property] === propertyValue) {
      return film;
    }
  });
  return result;
};