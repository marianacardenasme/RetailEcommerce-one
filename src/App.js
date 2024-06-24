import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Error from "./pages/Error";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Footer from "./components/Footer"
import ProductDetails from './pages/ProductDetails';
import Category from "./pages/Category";
import Collection from "./pages/Collection";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ECOMMERCE</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="ECOMMERCE" />
        </Helmet>
      </HelmetProvider>
      
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:name" element={<ProductDetails />}></Route>
        <Route path="/category/:categoryName" element={<Category />}></Route>
        <Route path="/collection/:collectionName" element={<Collection />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
