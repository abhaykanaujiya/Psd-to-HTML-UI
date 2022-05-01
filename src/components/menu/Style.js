import styled from "styled-components";
export const StyledNav = styled.div`
position:fixed ;
  width: 370px;
  height: 100vh;
  display: flex;
  background-color: #4f77fb;
  justify-content: center;
  margin: 10px;
`;
export const StyledImg = styled.img`
  display: flex;
  
  justify-content: center;
  /* width: 60px;
  height: 60px; */
`;
export const StyledDiv = styled.div`
  border: 1px solid;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  .p1 {
    margin: 10px;
  }
  .p2 {
    margin-left: 34px;
    margin-top: 0px;
  }
  .company-name {
    margin: 0px;
  }
  .logo-container {
    border-bottom: 1px solid #6186ff;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .menu {
    height: 100%;
    width: 100%;
  }
  .menu-items {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    padding-left: 30px;
    color: white;
  }
  .typography-text {
    font-size: 18px;
  }

  .nav-bottum {
    border-top: 1px solid #6186ff;
    width: 100%;
    height: 100%;
  }
  .nav-bottom-items {
    display: flex;
    margin: 20px;
    justify-content: center;
    flex-flow: column;
    padding-top: 20px;
  }

  .search {
    display: flex;
    padding: 5px;
    height: 30px;
    border: 1px solid #6186ff;

    border-radius: 5px;
  }
  .input-field {
    /* text-decoration-color: white; */
    background-color: #4f77fb;
    width: 270px;
    margin-left: 5px;
    border: none;
  }

  .input-field:focus {
    outline: none;
  }
  .input-field::placeholder {
    color: white;
  }
  .search-image {
    width: 20px;
    padding: 5px;
  }
  .heading-shots {
    margin-left: 15px;
    color: white;
  }
  .dribble-shots {
  }
  .shots {
    display: flex;
    flex-wrap: wrap;
  }
  .shot {
    margin-left: 6px;
    margin-top: 15px;
    border: 1px solid #494f54;
    background: #494f54;
    border-radius: 36px;
    padding: 6px;
  }
  .social {
    color: white;
  }
  .social-heading {
    margin-left: 15px;
    margin-bottom: 25px;
  }
  .social-icons {
    display: flex;
    padding-bottom: 10px;
  }
  .icons {
    display: flex;
    height: 43px;
    width: 43px;
  }
  .icon-img {
    padding: 10px;
    border-radius: 5px;
    margin-left: 15px;
    border: 1px solid #6186ff;
    width: 25px;
    height: 25px;
  }
`;
export const StyledTextField = styled.input`
  height: 30px;
  padding: 10px;
`;
