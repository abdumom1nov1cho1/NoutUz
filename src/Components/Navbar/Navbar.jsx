import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";
import "../Navbar/Navbar.scss";
const Navbar = () => {
  const { items } = useCart();


  const { data } = useContext(Context);
    //patch
    const PatchElements = async (_id) => {
      await axios.patch(`https://razer-api.onrender.com/devices/${_id}`, {
        name: name,
        image: img,
        price: price,
        desc: desc,
        category: category,
      });
      window.location.reload();
    };
    //patch

  return (
    <div>
      <nav class="navbarrr navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              className="mm"
              src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg"
              alt=""
              style={{ width: "200px", margin: "10px" }}
            />
          </a>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div className="input">
                  <input
                    className="Nav__inp"
                    type="text"
                    placeholder="Search ???"
                    name=""
                    id=""
                  />
                  <button className="btn1">
                    <img
                      className="img__inp"
                      src="https://www.citypng.com/public/uploads/small/11640084027eqwauegwzmhrbniaualprqoe4jj2jguwobj2t6vnixim3yf2w8xzbb5jdksvrcemxwzv9ncnqzadnjtmwf6eqpadmrmarzhefgxf.png"
                      alt=""
                    />
                  </button>
                </div>
              </li>
            </ul>
            <form class="vvv d-flex">
              <a href="">
                <Link to="/korzinka">
                  <img
                    src="https://www.pngmart.com/files/7/Cart-PNG-Pic.png"
                    alt=""
                    style={{ width: "25px" }}
                  />
                </Link>
                <span className="ff">{items.length}</span>
              </a>
              {/* {!localStorage.getItem("access") ? (
                <div className="center">
                  <Link className="sign" to="/sign-up">
                    Sign Up
                  </Link>
                  <Link className="sign" to="/sign-in">
                    Sign In
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => {
                    window.localStorage.removeItem("access");
                    window.location.reload();
                  }}
                >
                  Log out
                </button>
              )} */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
