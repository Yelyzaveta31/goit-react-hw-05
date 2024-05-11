import { useEffect, useState } from "react";
import { fetchMovies } from "../../service/Api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchMovies();
      setMovies(results);
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1 className={s.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
