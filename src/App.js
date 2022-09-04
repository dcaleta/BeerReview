import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import "../src/index.css";
import PubsPage from "./pages/pubs";
import Runda from "./pages/runda";
import Gajba from "./pages/gajba";
import Amsterdam from "./pages/amsterdam";
import Beertija from "./pages/beertija";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="/pubs" element={<PubsPage />} exact />
        <Route path="/runda" element={<Runda />} exact />
        <Route path="/gajba" element={<Gajba />} exact />
        <Route path="/amsterdam" element={<Amsterdam />} exact />
        <Route path="/beertija" element={<Beertija />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
