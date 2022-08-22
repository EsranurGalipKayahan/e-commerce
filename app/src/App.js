import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./components/Container";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Products } from "./components/common/Products";
import { Login } from "./components/Login";

function App() {
  return (
    <Container>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<Products />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
