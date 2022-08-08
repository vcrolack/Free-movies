import React, { useEffect, useState } from "react";
import { getItemsStorage } from "../helpers/getItemsStorage";

export const List = ({movies, setMovies}) => {
  //const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let moviesStorage = getItemsStorage("movies");

    setMovies(moviesStorage);
  };

  return (
    <>
      {movies.length > 0 ? movies.map(movie => {
        return (
          <article key={movie.id} className="movie-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </article>
        )
      })
      : <h2>Without movies to share with you. Sorry!</h2>
    }
    </>
  );
};
