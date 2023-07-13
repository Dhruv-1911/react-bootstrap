import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import services4 from "../images/services3.jpeg";
function slider() {
  return (
    <div id="carouselExample" className="carousel slide bg-success-subtle">
      <div className="carousel-inner">
        <div className="carousel-item active ">
          {/* <div className="hello">
          <h1>Hello World !....</h1>
          </div> */}
          <div class="hello hero_content hero_content2">
            <h5 class="text-blue">
              Welcome to the <span style={{fontSize:"40px"}}>BOOTCAMP</span>
            </h5>
            <h1 class="text-yellow" style={{fontSize:"30px"}}>We Bake With Pasion.</h1>
            <a class="btn">Shop Now</a>
          </div>
          <img
            src={image1}
            className="bg-image d-block w-70 mx-auto h-auto"
            alt="image1"
          />
        </div>
        <div className="carousel-item">
          <div className="hello">
            <h1>This is Second Slide</h1>
          </div>
          <img
            src={image2}
            className="bg-image d-block w-70 mx-auto h-auto"
            alt="image2"
          />
        </div>
        <div className="carousel-item ">
          <div className="hello">
            <h1>This is third slide</h1>
          </div>
          <img
            src={image3}
            className="bg-image d-block w-70 mx-auto h-auto"
            alt="image3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default slider;
