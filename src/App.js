import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./page/About";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Where from "./page/Where";

function App() {
  return (
    <>
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
