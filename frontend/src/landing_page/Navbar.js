import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#FFFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src='media/images/logo.svg' alt='logo' style={{ width: "25%" }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/product">Product</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>

              &nbsp;&nbsp;&nbsp;
              <li>
                <a href="https://zerodha-dashboard-eight.vercel.app/" >
                  <button type="button" class="btn btn-primary mt-1" data-toggle="button" aria-pressed="false" autocomplete="off" style={{backgroundColor:"#DB342C",border:"none"}}>
                    Kite Dashboard
                  </button>
                </a>
                
              </li>


            </ul>
          </form>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
