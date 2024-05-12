import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={s.item}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${movie.id.toString()}`,
                state: { from: location.pathname },
              }}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
