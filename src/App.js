import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";
import Error from "./pages/Error";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Footer from "./components/Footer"
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
          <meta charSet="utf-8" />
          <title>ECOMMERCE</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="ECOMMERCE" />
      </Helmet>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:name" element={<ProductDetails />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
