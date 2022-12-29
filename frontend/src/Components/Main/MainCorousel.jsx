import React from "react";
import child from "../../assets/child_7.jpg";
import child_2 from "../../assets/child_2.jpg";
import child_3 from "../../assets/child_3.jpg";

const MainCorousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={child} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={child_2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={child_3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default MainCorousel;
