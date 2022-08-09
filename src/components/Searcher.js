import React, {useState} from "react";

export const Searcher = ({movies, setMovies}) => {

  const [search, setSearch] = useState('');

  const searchMovie = e => {
    setSearch(e.target.value);

    let moviesFound = movies.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });

    if (search.length <= 1 || moviesFound <= 0) {
      moviesFound = JSON.parse(localStorage.getItem('movies'));
    } 

    setMovies(moviesFound);

  };

  return (
    <div className="search">
      <h3 className="title" id="search-field">
        Searcher
      </h3>
      <h4>{search}</h4>
      <form>
        <input
          type="text"
          id="search-field"
          name="search"
          autoComplete="off"
          value={search}
          onChange={searchMovie}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
