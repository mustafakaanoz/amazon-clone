import React from 'react';
import Product from '../Product/Product';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='assets/img/home.jpg' />
        <div className='home__rowGroup'>
          <div className='home__row'>
            <Product
              id="1"
              title="AirPods Pro Case Cover"
              price={6.98}
              rating={5}
              image="https://m.media-amazon.com/images/I/51iq0OjVG5L._AC_SX679_.jpg"
            />
            <Product
              id="2"
              title="GE Drip Coffee Maker With Timer"
              price={69.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/81Clwr5BReL._AC_SX679_.jpg"
            />
          </div>
          <div className='home__row'>
            <Product
              id="3"
              title="USB C Female to USB Male Adapter 4 Pack"
              price={12.99}
              rating={2}
              image="https://m.media-amazon.com/images/I/611kCiNL9lL._AC_SX466_.jpg"
            />
            <Product
              id="4"
              title="Portable Video-Projector"
              price={68.84}
              rating={3}
              image="https://m.media-amazon.com/images/I/61+CDKTXYgL._AC_SX466_.jpg"
            />
            <Product
              id="5"
              title="Classic All-Weather Adirondack Chair"
              price={149.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/61-x9PnJ34L._AC_SX679_.jpg"
            />
          </div>
          <div className='home__row'>
            <Product
              id="6"
              title="Portable Selfie Stick"
              price={19.98}
              rating={5}
              image="https://m.media-amazon.com/images/I/71YFKFgfPJL._AC_SX466_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;