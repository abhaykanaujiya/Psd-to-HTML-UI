import React from "react";
import { SliderDiv } from "./Style";
import { sliderImage, leftarrow, rightarrow } from "./Asset";
import OurWorkNav from "../ourWork/OurWorkNav";
const Slider = () => {
  const sliderNumber = ["01"];
  return (
    <SliderDiv className="slider">
      <div className="slider-card">
        <img src={sliderImage} />
        <div className="slider-heading">
          <h2 className="heading">
            We do it with{" "}
            <span className="slider-heading-text">{`<style>`}</span>
          </h2>
          <p className="slider-paragraph">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin
          </p>
        </div>
        <div className="slider-side-nav">
          {sliderNumber.map((num) => (
            <div className="slide-number">{num}</div>
          ))}

          <div className="navigation-arrow">
            <div className="right">
              <img className="right-arrow" src={rightarrow} alt="img" />
            </div>
            <div className="left">
              <img className="left-arrow" src={leftarrow} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="work-parent">
        <OurWorkNav />
      </div>
    </SliderDiv>
  );
};
export default Slider;
