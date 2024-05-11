import axios from "axios";

const API_KEY = "3b460c1a89e3d67f044796822871fcd9";

const baseUrl = "https://api.themoviedb.org/3";

const trendingUrl = `${baseUrl}/trending/movie/day?api_key=${API_KEY}`;

export const fetchMovies = async () => {
  const { data } = await axios.get(trendingUrl);

  return data;
};

export const fetchMovieById = async (id) => {
  const movieUrl = `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
  const { data } = await axios.get(movieUrl);
  console.log(data);
  return data;
};
