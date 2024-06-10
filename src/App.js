import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productDetails" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
