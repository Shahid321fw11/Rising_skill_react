import React from "react";
import "./Cards.css";
import child from "../../assets/child_7.jpg";
import child_2 from "../../assets/child_2.jpg";
import child_3 from "../../assets/child_3.jpg";

const Cards = () => {
  return (
    <>
      <div className="card_container">
        <div class="card" style={{ width: "18rem" }}>
          <img src={child} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">BE THE CHANGE</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              VOLUNTEER
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={child_3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={child_2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">EMPOWER A CHILD TODAY</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              DONATE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
