import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
