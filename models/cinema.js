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
    return result;
  }