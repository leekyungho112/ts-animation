import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './Components/Header';
import Movie from './Routes/Movie';
import Detail from './Components/Detail';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movie/:movieId" element={<Detail />} />
          <Route path="/tv/:tvId" element={<Detail />} />
        </Route>

        <Route path="/movies" element={<Movie />}>
          <Route path=":movieId" element={<Detail />} />
        </Route>

        <Route path="/tv" element={<Tv />}>
          <Route path="show/:tvId" element={<Detail />} />
        </Route>

        <Route path="/search" element={<Search />}>
          <Route path="movies/:movieId" element={<Detail />} />
          <Route path="tv/:tvId" element={<Detail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
