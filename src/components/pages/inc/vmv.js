import React from "react";
import {Link} from "react-router-dom";

function VMV() {
  return (
    <section className="section-second color border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h2 className="heading">Vision, Mission and Values</h2>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-4 mt-2 text-center">
            <h6 className="sub-heading">Our Vision</h6>
            <p>
              Eu pariatur enim culpa duis ex aliqua elit. Est et non
              reprehenderit duis ad consectetur occaecat commodo laborum mollit
              ut magna mollit. .
            </p>
            <Link to='/' className="btn btn-warning shadow"> Read More</Link>
          </div>
          <div className="col-md-4 mt-2 text-center">
            <h6 className="sub-heading">Our Mission</h6>
            <p>
              Eu pariatur enim culpa duis ex aliqua elit. Est et non
              reprehenderit duis ad consectetur occaecat commodo laborum mollit
              ut magna mollit. 
            </p>
            <Link to='/' className="btn btn-warning shadow"> Read More</Link>
          </div>
          <div className="col-md-4 mt-2 text-center">
            <h6 className="sub-heading">Our Core Values</h6>
            <p>
              Eu pariatur enim culpa duis ex aliqua elit. Est et non
              reprehenderit duis ad consectetur occaecat commodo laborum mollit
              ut magna mollit. 
            </p>
            <Link to='/' className="btn btn-warning shadow"> Read More</Link>
          </div>
          <div className="d-flex  justify-content-evenly">
          
          <div className="col-md-6 mt-5 text-center" style={{width:"416px"}}>
            <h6 className="sub-heading">Our Core Values</h6>
            <div>
            <p>
              Eu pariatur enim culpa duis ex aliqua elit. Est et non
              reprehenderit duis ad consectetur occaecat commodo laborum mollit
              ut magna mollit. 
            </p>
            </div>
            <Link to='/' className="btn btn-warning shadow"> Read More</Link>
          </div>
          <div className="col-md-6 mt-5 text-center" style={{width:"416px"}}>
            <h6 className="sub-heading">Our Core Values</h6>
            <p>
              Eu pariatur enim culpa duis ex aliqua elit. Est et non
              reprehenderit duis ad consectetur occaecat commodo laborum mollit
              ut magna mollit. 
            </p>
            <Link to='/' className="btn btn-warning shadow"> Read More</Link>
          </div>
           </div> 
  
        </div>
      </div>
    </section>
  );
}
export default VMV;
