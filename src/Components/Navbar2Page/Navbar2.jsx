import React from "react";
import { Link } from "react-router-dom";
import "../Navbar2Page/Navbar2.scss";
const Navbar2 = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenu3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button class="dropdown-item" type="button">
                  Ноутбуки
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Игровые ноутбуки
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Ультрабуки
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Трансформеры
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Трансформеры
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Ноутбуки для бизнеса
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  ПК
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Аксессуары
                </button>
              </li>
            </ul>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto  mb-4 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link className="ss" to="/">Главная</Link>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Бренды
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/asus">Asus</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/msi">MSI</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/lenovo">Lenovo</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/hp">HP</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/dell">DEll</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/razer">Razer</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/samsung">Samsung</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/microsoft">Mcrosoft Surface</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/apple">Apple</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/acer">Acer</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/lg">LG</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link className="ss" to="/hyper">HyperX</Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Условия кредита
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Новости
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Наши контакты
                </a>
              </li>
            </ul>
            <form class="mmm d-flex">
              <img
                className="tel__btn__img"
                src="https://img.freepik.com/free-icon/headphones_318-625320.jpg"
                alt=""
              />
              <div className="tel__btn">
                <a className="tel__btn__a" href="">
                  +998 (93) 399-22-72
                </a>
                <p className="tel__btn__p">@Noutuz (Telegram)</p>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
