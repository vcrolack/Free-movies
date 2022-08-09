import React from 'react'

export const Edit = ({movie, getMovies, setEdition, setMovies}) => {
  const componentTitle = 'Edit movie'

  const saveEdition = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const moviesSaved = getMovies();
    const index = moviesSaved.findIndex(movie => movie.id === id);
    let movieUpdated = {
      id,
      title: target.title.value,
      description: target.description.value
    }

    moviesSaved[index] = movieUpdated;

    localStorage.setItem('movies', JSON.stringify(moviesSaved));
    setMovies(moviesSaved);
    setEdition(0);
    

  };


  return (
    <div>
      <h3>{componentTitle}</h3>
      <form onSubmit={e => saveEdition(e, movie.id)}>
        <input type="text" name="title"  defaultValue={movie.title}/>
        <textarea name="description" defaultValue={movie.description}   cols="30" rows="10"></textarea>
        <input type="submit"  value="Update"/>
      </form>
    </div>
  )
}
