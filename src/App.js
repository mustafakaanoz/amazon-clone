import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';

function App() {
  return (

    <div className='app'>
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/checkout' element={<><Header /><Checkout /></>} />
      </Routes>

    </div>


  );
}

export default App;
