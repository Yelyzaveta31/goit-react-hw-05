import { Axios } from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjQ2MGMxYTg5ZTNkNjdmMDQ0Nzk2ODIyODcxZmNkOSIsInN1YiI6IjY2M2U3M2I4MWI5NmY0MjY5ZTNjOGNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zDV9Pcr1cuGFye23dpbXS5QuyAM8TLZa8AfdByWW2ow",
  },
};

Axios.get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
