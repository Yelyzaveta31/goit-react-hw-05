import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../service/Api";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieByQuery = async () => {
      try {
        const queryWord = searchParams.get("query");

        if (!queryWord) return;

        const data = await fetchMovieByQuery(queryWord);
        setMovies([]);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByQuery();
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.elements.title.value;

    if (query.trim() === "") {
      alert("Error, enter movies");
      return;
    }

    setSearchParams({ query });

    form.reset();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.wrapper}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            placeholder="Enter movie..."
            name="title"
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </div>
      </form>
      <div>
        {movies.length === 0 && searchParams.get("query") ? (
          <p className={s.errorSearch}>No movies found. Please try again.</p>
        ) : (
          <div className={s.listWrapper}>
            <ul className={s.list}>
              {movies.map((movie) => {
                return (
                  <li key={movie.id} className={s.item}>
                    <Link
                      className={s.link}
                      to={`/movies/${movie.id.toString()}`}
                    >
                      {movie.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
