import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/page" element={<MoviesPage />} />
        <Route path="/notFound" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
