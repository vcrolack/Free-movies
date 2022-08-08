import React, { useState } from "react";
import { SaveStorage } from "../helpers/SaveStorage";

export const Create = ({setMovies}) => {
  
  const title = "Add movie";
  const [movieState, setMovieState] = useState({});


  const getDataForm = e => {
    e.preventDefault();
    const target = e.target;
    const title = target.title.value;
    const description = target.description.value;
    let movie = {
      id: new Date().getTime(),
      title: title,
      description: description
    };

    setMovieState(movie);
    // update main state
    setMovies(items => {
      return [...items, movie];
    })

    SaveStorage('movies', movie)


    
  };

  


  return (
    <div className="add">
      <h3 className="title">{title}</h3>
      <form onSubmit={getDataForm}>
        <input type="text" placeholder="Name" name="title"/>
        <textarea
          placeholder="description"
          name="description"
          id="description"
        ></textarea>
        <input type="submit" value="Save" id="save" />
      </form>
    </div>
  );
};
