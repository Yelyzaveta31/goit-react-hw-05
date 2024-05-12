import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../service/Api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    try {
      const getCast = async () => {
        const data = await fetchCast(movieId);
        setCast(data);
      };
      getCast();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  if (!cast) return <h3>Loading...</h3>;
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {cast.cast.slice(0, 8).map((actor) => {
          return (
            <li className={s.item} key={actor.id}>
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                alt={actor.name}
              />
              <h3 className={s.name}>{actor.name}</h3>
              <p className={s.char}>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
