import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-capitalize">
              {props.title}
            </h5>
            <p class="card-text py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/Contact" class="btn btn-outline-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;


