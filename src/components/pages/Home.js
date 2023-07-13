import React from "react";
import Slider from "../inc/slider";
import { Link } from "react-router-dom";
import VMV from "./inc/vmv";
import Services from "./inc/services";

function Home() {
  return (
    <div>
      <div className="banner">
        <Slider />
      </div>

      <section
        className="section d-flex align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="heading">Our Company</h2>
              <div className="underline mx-auto"></div>
              <p className="paragraph mt-4">
                Incididunt exercitation proident dolore sit in laboris nisi ex
                tempor est consequat. Pariatur laboris laborum nostrud commodo
                eiusmod reprehenderit sunt tempor ex irure. Do incididunt ut
                laboris enim. Consectetur et elit elit eiusmod. Mollit culpa non
                consequat ipsum labore exercitation cupidatat ut proident
                laborum eiusmod esse. Tempor dolor anim anim pariatur nisi minim
                eiusmod do et.
              </p>
              <Link to="/about" className="btn btn-secondary mt-2 shadow-sm">
                {" "}
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* our vision , mission and Values  */}
      <VMV />

      {/* Our Services */}
      <Services />
    </div>
  );
}
export default Home;
