import styled from "styled-components";

export const StyledDiv = styled.div`
.card-body{
  display:flex ;
}
`;
export const StyledNav = styled.div`
border:1px solid ;
padding-left:20px ;
`
export const StyledCard = styled.div`
  border: 1px solid;
  /* width: 305px; */
  align-items: center;
  .card-title {
    width: 305px;
    height: 85px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin-left: 20px;
  }
  .heading {
    margin: 0px;
  }
  .sub-heading {
    margin: 0px;
    color: #44434a;
  }
  .card-title-icon {
    margin-right: 15px;
    width: 70px;
    height: 70px;
  }
`;
export const StyledCardImage = styled.img`

`