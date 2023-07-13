import React from "react";
import { Link } from "react-router-dom";
import services1 from "../../images/services1.jpg"
import services2 from "../../images/services2.jpg"
import services3 from "../../images/services3.jpeg"
import services4 from "../../images/services4.png"
import services5 from "../../images/services5.jpg"
import services6 from "../../images/services6.jpg"

function services(){
    return(
        <section className="section color border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="heading">Our Services</h2>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 mt-3 text-center">
              <div className="card shadow" data-aos="zoom-in">
              <div className="imgDiv">
                <img src={services1} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5>Service 1</h5>
                  <div className="underline mx-auto"></div> 
                  <p className="card-text">
                    Some quick example text to build on the Our services and make
                    up the bulk of the card's content.
                  </p>
                   <Link to={"/"} className="btn btn-info shadow" >Read More</Link> 
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 text-center">
              <div className="card shadow" data-aos="zoom-in">
              <div className="imgDiv">
                
                <img src={services2} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                 <h5>Service 2</h5>
                  <div className="underline mx-auto"></div>
                  <p className="card-text">
                    Some quick example text to build on the Our services and make
                    up the bulk of the card's content.
                  </p>
               <Link to={"/"} className="btn btn-info shadow" >Read More</Link> 
                </div>
              </div>
            </div>
         
            <div className="col-md-4 mt-3 text-center">
              <div className="card shadow" data-aos="zoom-in">
              <div className="imgDiv">
                <img src={services4} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                   <h5>Service 4</h5>
                  <div className="underline mx-auto"></div> 
                  <p className="card-text">
                    Some quick example text to build on the Our services and make
                    up the bulk of the card's content.
                  </p>
                   <Link to={"/"} className="btn btn-info shadow" >Read More</Link> 
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 text-center">
              <div className="card shadow" data-aos="zoom-in">
              <div className="imgDiv">
                
                <img src={services3} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5>Service 3</h5>
                  <div className="underline mx-auto"></div> 
                  <p className="card-text">
                    Some quick example text to build on the Our services and make
                    up the bulk of the card's content.
                  </p>
                 <Link to={"/"} className="btn btn-info shadow" >Read More</Link> 
                </div>
              </div>
            </div>
             <div className="col-md-4 mt-3 text-center">
              <div className="card shadow" data-aos="zoom-in">
              <div className="imgDiv">
                <img src={services5} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5>Service 5</h5>
                  <div className="underline mx-auto"></div> 
                   <p className="card-text">
                    Some quick example text to build on the Our services and make
                    up the bulk of the card's content.
                  </p>
                   <Link to={"/"} className="btn btn-info shadow" >Read More</Link> 
                </div>
              </div>
            </div> 
            <div className="col-md-4 mt-3 text-center">
              <div className="card shadow" data-aos="zoom-in">
              <div className="imgDiv">
                <img src={services6} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5>Service 6</h5>
                  <div className="underline mx-auto"></div> 
                   <p className="card-text">
                    Some quick example text to build on the Our services and make
                    up the bulk of the card's content.
                  </p>
                   <Link to={"/"} className="btn btn-info shadow" >Read More</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default services;