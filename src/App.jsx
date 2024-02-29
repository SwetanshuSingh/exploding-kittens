import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game.jsx";
import HomePage from "./pages/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;