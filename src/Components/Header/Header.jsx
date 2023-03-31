import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import "../Header/Header.scss"

const Header = (props) => {
  return (
    <>

      {/* category menu */}
      <div className="category">
        <ul className="c-items">
          <Link to="/asus" >
          <li className="active c-item">Asus</li>
          </Link>
         <Link to="/msi" >
         <li className="c-item">MSI</li>
         </Link>
          <Link to="/lenovo" >
          <li className="c-item">Lenovo</li>
          </Link>
          <Link to="/Hp" >
          <li className="c-item">HP</li>
          </Link>
          <Link to="/dell">
          <li className="c-item">Dell</li>
          </Link>
          <Link to="/razer" >
          <li className="c-item">Razer</li>
          </Link>
          <Link to="/samsung" >
          <li className="c-item">Samsung</li>
          </Link>
          <Link to="/microsoft" >
          <li className="c-item">Microsoft Surface</li>
          </Link>
          <Link to="/apple" >
          <li className="c-item">Apple</li>
          </Link>
          <li className="c-item">Acer</li>
          <li className="c-item">LG</li>
          <li className="c-item">HyperX</li>
        </ul>
      </div>


      {/* hero carusel */}
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nout.uz/wp-content/uploads/2023/02/1-HP%20Victus%20R5%201970x650.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nout.uz/wp-content/uploads/2022/12/1-Victus%203050%201970x650.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nout.uz/wp-content/uploads/2023/02/1-HP%20Pavilion%201970x650.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="container">
      <div className="header__text">
        <h1 className='header__text__h1'>Ноутбуки в Ташкенте. Выберите из 200 моделей!</h1>
        <h5 className='header__text__h5' >Магазин Ноутбуков №1. Доставка по  Узбекистану. Гарантия до 2 лет</h5>
      </div>
      </div>
    </>
  )
}

export default Header
