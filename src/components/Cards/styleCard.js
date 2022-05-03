import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.div`

  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  .description-container {
  }
`;
export const StyledCardItems = styled.div`
  width: 458px;
  position: relative;
  ${(props) =>
    props.id % 2 == 0 &&
    css`
      width: 458px;
      position: relative;
      margin-left: 7px;
    `}
`;
export const CardImage = styled.img`
  width: 458px;
  height: 462px;
`;
export const StyledHoverImage = styled.img`
  position: absolute;
  left: 7%;
  top: 5%;
`;
export const StyledCurveLogo = styled.img`
  position: absolute;
  left: 35%;
  top: 25%;
`;
export const Icons = styled.div`
  display: flex;
  flex-flow: row;
  ${(props) =>
    props.type == "rightTop" &&
    css`
      position: absolute;
      top: 3%;
      right: 100%;
      left: 75%;
    `}
  ${(props) =>
    props.id == "2" &&
    css`
      position: absolute;
      top: 80%;
      right: 100%;
      left: 75%;
    `}
      ${(props) =>
    props.id == "1" &&
    css`
      position: absolute;
      top: 70%;
      right: 100%;
      left: 13%;
    `}
          ${(props) =>
    props.id == "4" &&
    css`
      position: absolute;
      top: 65%;
      right: 100%;
      left: 76%;
    `}
     ${(props) =>
    props.id == "9" &&
    css`
      position: absolute;
      top: 70%;
      right: 100%;
      left: 41%;
      font-size: 17px;
    `}
    
  .search-icon-container {
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .search-icon {
    padding: 8px;
    width: 20px;
    height: 20px;
  }
  .file-icon-container {
    border: 1px solid;
    background-color: #5077fb;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .file-icon {
    padding: 8px;
    width: 20px;
    height: 20px;
  }
`;
export const StyledSearchIcon = styled.div`
  background-color: #5077fb;
  ${(props) =>
    props.id == "10" &&
    css`
      .search-icon {
        background-color: white;
      }
    `}
`;
export const StyledDescription = styled.div`
  padding-top: 10px;
  padding-left: 15px;
  /* width: 409px; */
  width: 408px;
  ${(props) =>
    props.id == "1" &&
    css`
      position: absolute;
      top: 79%;
      right: 100%;
      left: 10%;
    `}
  ${(props) =>
    props.id == "2" &&
    css`
      position: absolute;
      top: 72%;
      right: 100%;
      left: 57%;
    `}
  ${(props) =>
    props.id == "3" &&
    css`
      position: absolute;
      top: 82.4%;
      right: 100%;
      left: 0%;
      padding: 25px;
      opacity: 0.7;
      background-color: #5a5858;
    `}
    
      ${(props) =>
    props.id == "4" &&
    css`
      position: absolute;
      top: 74%;
      right: 100%;
      left: 64%;
    `}

          ${(props) =>
    props.id == "6" &&
    css`
      position: absolute;
      top: 43%;
      right: 100%;
      left: 31%;
      font-size: 17px;
      color: #5077fb;
    `}

  .description-heading {
    margin: 0px;
    color: #ffffff;
  }
  .description-para {
    margin: 0px;
    color: #ffe000;
  }
  ${(props) =>
    props.id == "6" &&
    css`
      .description-heading {
        color: blue;
      }
      .description-para {
        color: black;
      }
    `}
  ${(props) =>
    props.id == "5" &&
    css`
      position: absolute;

      top: 43%;
      right: 100%;
      left: 31%;
      font-size: 17px;
      color: #5077fb;

      .description-para {
        margin-left: 35px;
      }
    `}

     ${(props) =>
    props.id == "7" &&
    css`
      position: absolute;
      top: 82.4%;
      right: 100%;
      left: 0%;
      padding: 25px;
      background-color: #5077fb;
    `}
     ${(props) =>
    props.id == "8" &&
    css`
      position: absolute;
      top: 45%;
      right: 100%;
      left: 31%;
      font-size: 17px;
      .description-para {
        margin-left: 35px;
      }
    `}

     ${(props) =>
    props.id == "9" &&
    css`
      position: absolute;
      top: 79%;
      right: 100%;
      left: 31%;
      font-size: 17px;
      .description-para {
        margin-left: 25px;
      }
      .description-heading {
        color: lightgray;
      }
    `}
     ${(props) =>
    props.id == "10" &&
    css`
      position: absolute;
      top: 38%;
      right: 100%;
      left: 31%;
      font-size: 17px;
    `}
`;
