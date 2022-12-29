import React from "react";
import "./Main.css";
import MainCorousel from "./MainCorousel";
import child from "../../assets/child_7.jpg";
import child_2 from "../../assets/child_2.jpg";
import child_3 from "../../assets/child_3.jpg";
import Cards from "./Cards";

const Main = () => {
  return (
    <>
      <div className="container p-0">
        <MainCorousel />
        <blockquote class="blockquote my-5">
          <p>
            <b>Rising Skill Foundation</b> is a Delhi based not-for-profit
            organization working with children from low-income communities in
            the field of education and skill. Our primary aim is to ensure that
            every child of school going age is gaining a strong and holistic
            educational foundation to become a responsible, compassionate and
            confident citizen of tomorrow.
          </p>
        </blockquote>
        <Cards />
      </div>
    </>
  );
};

export default Main;
