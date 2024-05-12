import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../service/Api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    try {
      const getReviews = async () => {
        const data = await fetchReviews(movieId);
        setReviews(data);
      };
      getReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  if (!reviews) return <h3>Loading...</h3>;
  return (
    <div className={s.wrapper}>
      {reviews && reviews.results && reviews.results.length > 0 ? (
        <ul className={s.list}>
          {reviews.results.slice(0, 4).map((review) => {
            return (
              <li className={s.item} key={review.id}>
                <h3 className={s.name}>{review.author}</h3>
                <p className={s.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4 className={s.notFound}>
          Sorry, but there are no reviews for this movie
        </h4>
      )}
    </div>
  );
};

export default MovieReviews;
