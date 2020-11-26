import React, { useState } from "react";
import { moviesData } from "./MoviesData";
import Header from "./Header/Header";
import AddMovie from "./AddMovie/AddMovie";
import MoviesList from "./MoviesList";

const Home = () => {
  const [moviesList, SetMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);

  const AddNewMovie = (x) => SetMoviesList([...moviesList, x]);

  return (
    <div>
      <Header
        setNameSearch={setNameSearch}
        rateSearch={rateSearch}
        setRateSearch={setRateSearch}
      />
      <MoviesList
        moviesList={moviesList.filter(
          (el) =>
            el.rating >= rateSearch &&
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )}
      />
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
};

export default Home;
