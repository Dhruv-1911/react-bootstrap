import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section>
      <div className="top-bar bg-secondary">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-6">
            Anim anim aliqua mollit adipisicing qui quis.
          </div>
          <div className="col-md-6 text-end">
              <span className="me-4">
               +91 9874562543
              </span>
              <span>
                fhdfh@gmail.com
              </span>
          </div>
        </div>
      </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-5">
            React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                  {" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
