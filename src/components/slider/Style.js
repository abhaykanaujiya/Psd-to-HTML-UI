import styled from "styled-components";

export const SliderDiv = styled.div`

  width: 925px;
  margin: 10px;
  position:absolute ;
  margin-left:40% ;
  .slider-card {
  }
  .slider-heading {
    position: absolute;
    bottom: 0%;
    left: 8.3%;
    top:4.7% ;
    height:fit-content ;
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
    bottom: 0%;
    left: 8%;
    top:6.5% ;
    height:fit-content ;
  }
  .slide-number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border: 1px solid lightgray;
    width: 50px;
    height: 50px;
  }
  .navigation-arrow {
    display: flex;
    flex-flow: column;
    margin-left: 5px;
  }
  .right {
    display: flex;
    justify-content: center;
    width: 50px;
    height: 21px;
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
    width: 50px;
    height: 21px;
    border: 1px solid lightgray;
    align-items: center;
  }
  .left-arrow {
    width: 25px;
    height: 19px;
  }
`;