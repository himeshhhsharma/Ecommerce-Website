import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import About from "./pages/About";
import Shop from "./pages/Shop";
import InnerShop from "./pages/innershop"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/innershop" element={<InnerShop/>}/>

      </Routes>
    </BrowserRouter>
  );
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);