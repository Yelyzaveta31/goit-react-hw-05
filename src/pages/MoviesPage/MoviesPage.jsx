const MoviesPage = () => {
  return <div>Movie PAge</div>;
};

export default MoviesPage;

// import { useEffect, useState } from "react";
// import { Form, useSearchParams } from "react-router-dom";
// import { fetchMovieByQuery } from "../../service/Api";
// import { Field, Formik } from "formik";
// import s from "./MoviesPage.module.css";

// const MoviesPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchMovies, setSearchMovies] = useState(null);
//   const query = searchParams.get("query");

//   useEffect(() => {
//     const getSearchMovies = async () => {
//       try {
//         const data = await fetchMovieByQuery(query);
//         setSearchMovies(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     if (query) {
//       getSearchMovies();
//     }
//   }, [query]);
//   return (
//     <>
//       <Formik
//         initialValues={{ searchStr: query }}
//         onSubmit={(values) => {
//           setSearchParams({ query: values.searchStr, page: 1 });
//         }}
//       >
//         <Form className={s.form}>
//           <Field className={s.input} name="searchStr" />
//           <button type="submit">Search</button>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default MoviesPage;
