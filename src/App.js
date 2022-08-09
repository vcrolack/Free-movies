import { useState } from "react";
import { Create } from "./components/Create";
import { List } from "./components/List";
import { Searcher } from "./components/Searcher";

function App() {

  const [movies, setMovies] = useState([]);

  return (
    <div className="layout">
    <header className="header">
      <div className="logo">
        <div className="play"></div>
      </div>
      <h1>Movies free</h1>
    </header>
    <nav className="nav">
      <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/#">Movies</a></li>
        <li><a href="/#">Blog</a></li>
        <li><a href="/#">Contact</a></li>
      </ul>
    </nav>
    <section className="content">
      {/* Peliculas */}
      <List movies={movies} setMovies={setMovies}/>
    </section>
    <aside className="lateral">
      {/* Buscador */}
      <Searcher movies={movies} setMovies={setMovies}/>
      <Create setMovies={setMovies} />
    </aside>
    <footer className="footer">
      Practice app.
    </footer>
  </div>
  );
}

export default App;
