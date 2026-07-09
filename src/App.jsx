import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Navbar from "./components/Layout/Navbar";
import APOD from "./Pages/APOD";
import Articles from "./Pages/Articles";
import Favourites from "./Pages/Favourites";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/favs" element={<Favourites />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
