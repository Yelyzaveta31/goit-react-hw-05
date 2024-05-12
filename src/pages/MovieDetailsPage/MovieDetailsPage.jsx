import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../service/Api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state || "/movies");
  const [movie, setMovie] = useState("");

  useEffect(() => {
    try {
      const getMovie = async () => {
        const results = await fetchMovieById(movieId);
        setMovie(results);
      };
      getMovie();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (!movie) return <h3>Loading...</h3>;
  const year = movie.release_date.split("-")[0];

  return (
    <div className={s.container}>
      <Link to={goBackRef.current}>
        <button className={s.goBack} onClick={() => window.history.back()}>
          Go Back
        </button>
      </Link>

      <div className={s.wrapper}>
        <img
          className={s.image}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={s.content}>
          <div>
            <h1 className={s.title}>
              {movie.title} ({year})
            </h1>
            <p className={s.text}>User Score: {movie.vote_average}</p>
          </div>
          <div>
            <h2 className={s.titleOverview}>Overview</h2>
            <p className={s.text}>{movie.overview}</p>
          </div>
          <div>
            <h3 className={s.titleGenre}>Genres</h3>
            <ul className={s.list}>
              {movie.genres.map((genre) => (
                <li className={s.item} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <nav className={s.navigation}>
        <h3 className={s.titleGenre}>Additional Information</h3>
        <NavLink className={s.link} to="cast">
          Cast
        </NavLink>
        <NavLink className={s.link} to="reviews">
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
