import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './Components/Header';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/tv" element={<Tv />} />
      </Routes>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movies/:movieId" element={<Home />} />
          {/* <Route path="/movies/:movieId" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
