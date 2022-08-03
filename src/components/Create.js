import React, { useState } from "react";

export const Create = () => {
  
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
