import React, { useEffect, useState } from "react";
import { getItemsStorage } from "../helpers/getItemsStorage";
import { Edit } from "./Edit";

export const List = ({ movies, setMovies }) => {
  const [edition, setEdition] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let moviesStorage = getItemsStorage("movies");

    setMovies(moviesStorage);
    return moviesStorage;
  };

  const deleteMovie = (id) => {
    let moviesList = getMovies();

    let newMoviesList = moviesList.filter((movie) => movie.id !== parseInt(id));

    setMovies(newMoviesList);

    localStorage.setItem("movies", JSON.stringify(newMoviesList));
  };

  return (
    <>
      {movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <article key={movie.id} className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit" onClick={() => setEdition(movie.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>
                Delete
              </button>

              {/* form para editar */}
              {edition === movie.id && (
                <Edit
                  movie={movie}
                  getMovies={getMovies}
                  setEdition={setEdition}
                  setMovies={setMovies}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>Without movies to share with you. Sorry!</h2>
      )}
    </>
  );
};
