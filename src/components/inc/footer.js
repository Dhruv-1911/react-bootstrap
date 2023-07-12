import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to={"/"} className="me-4 text-reset">
            <FontAwesomeIcon
              className="icon"
              icon={faFacebook}
              style={{ color: "#3277ee" }}
            />
          </Link>
          <Link to={"/"} className="me-4 text-reset">
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
              style={{ color: "#3277ee" }}
            />
          </Link>
          <Link to={"/"} className="me-4 text-reset">
            <FontAwesomeIcon
              className="icon"
              icon={faGoogle}
              style={{ color: "#3277ee" }}
            />
          </Link>
          <Link to={"/"} className="me-4 text-reset">
            <FontAwesomeIcon
              className="icon"
              icon={faInstagram}
              style={{ color: "#3277ee" }}
            />
          </Link>
          <Link to={"/"} className="me-4 text-reset">
            <FontAwesomeIcon
              className="icon"
              icon={faLinkedin}
              style={{ color: "#3277ee" }}
            />
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact us</h6>
              <p>
                <FontAwesomeIcon icon={faHouse} /> <nbsp />
                Address: 187, Godawari park soc., Part 1, Yogichowk, Surat,
                Gujarat (India) 395010.
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> <nbsp />
                enq.nilkanth@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> <nbsp />
                +91-7777 99 3781
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to={"/"} className="text-reset">
                  Mini Bhakarwadi
                </Link>
              </p>
              <p>
                <Link to={"/"} className="text-reset">
                  Sp Bhakarwadi
                </Link>
              </p>
              <p>
                <Link to={"/"} className="text-reset">
                  Jain Bhakarwadii
                </Link>
              </p>
              <p>
                <Link to={"/"} className="text-reset">
                  Garlic Bhakarwadi
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
              <p>
                <Link to={"/"} className="text-reset">
                  Our Story
                </Link>
              </p>
              <p>
                <Link to={"/"} className="text-reset">
                  Blogs
                </Link>
              </p>
              <p>
                <Link to={"/"} className="text-reset">
                  Orders
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="copyright text-center p-4">
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="/">
          dhruvkakadiya🙂
        </a>
      </div>
    </footer>
  );
}

export default footer;
