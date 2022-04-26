import styled from "styled-components";

export const SliderDiv = styled.div`
  border: 1px solid;
  width: 925px;
  margin: 10px;
  background-color: skyblue;
  .slider-card {
  }
  .slider-heading {
    position: absolute;
    bottom: 510px;
    left: 436px;
  }

  .slider-heading-text {
    background-color: #4f77fb;
    color: white;
    font-size: 12px;
  }
  .slider-paragraph {
    width: 460px;
    color: #92a4b1;
  }
  .slider-side-nav {
    display: flex;
    position: absolute;
    bottom: 410px;
    left: 436px;
  }
  .slide-number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border: 1px solid lightgray;
    width: 59px;
    height: 56px;
  }
  .navigation-arrow {
    display: flex;
    flex-flow: column;
    margin-left: 5px;
  }
  .right {
    display: flex;
    justify-content: center;
    width: 59px;
    height: 26px;
    border: 1px solid lightgray;
    align-items: center;
    margin-bottom: 5px;
  }
  .right-arrow {
    width: 25px;
    height: 19px;
  }

  .left {
    display: flex;
    justify-content: center;
    width: 59px;
    height: 26px;
    border: 1px solid lightgray;
    align-items: center;
  }
  .left-arrow {
    width: 25px;
    height: 19px;
  }
`;