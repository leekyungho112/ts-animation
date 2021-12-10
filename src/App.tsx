import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './Components/Header';

import Movie from './Routes/Movie';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/movies" element={<Movie />}>
          <Route path="/movies/:movieId" element={<Movie />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/tv" element={<Tv />}>
          <Route path="/tv/show/:tvId" element={<Tv />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/search" element={<Search />}>
          <Route path="/search/movies/:movieId" element={<Search />} />
          <Route path="/search/tv/:tvId" element={<Search />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movie/:movieId" element={<Home />} />
          <Route path="/tv/:tvId" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
