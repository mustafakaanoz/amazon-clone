import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <div className='app'>
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/checkout' element={<><Header /><Checkout /></>} />
        <Route path='/login' element={<><Login /></>} />
        <Route path='/payment' element={<><Header /><Payment /></>} />
      </Routes>

    </div>


  );
}

export default App;
