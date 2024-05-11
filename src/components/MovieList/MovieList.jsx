import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={s.item}>
            <Link className={s.link} to={`/movies/${movie.id.toString()}`}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
