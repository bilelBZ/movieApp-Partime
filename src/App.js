import { useState } from "react";
import "./App.css";
import AddMovie from "./components/addMovie";

import MovieList from "./components/MovieList";
import { Data } from "./Data";

function App() {
  const [movies, setMovies] = useState(Data);
  const AddFilm = (newFilm) => {
    setMovies([...movies, newFilm]);
  };
  return (
    <div className="App">
      <AddMovie AddFilm={AddFilm} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
