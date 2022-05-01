import styled from "@emotion/styled";


export const StyledFooter = styled.div`
  .rights {
    display:flex ;
    align-items:center ;
    justify-content:center ;
    height: 101px;
    background-color: #000000;
    color:white ;
    font-size:14px ;
  }
  .copyright-img{
    width:16px ;
    height:16px ;
  }
`;
export const StyledFooterCard = styled.div`
display: flex;
`
export const StyledMap = styled.div`
  position: relative;
  .pointer {
    position: absolute;
    left: 39%;
    top: 42%;
  }
`;
export const StyledImage = styled.img`

`
export const StyledForm = styled.div`
  width: 463px;
  height: 455px;
  justify-content:center ;
  align-items:center ;
  display: flex;
  flex-flow: column;

  background-color: #5077fb;
  .input {
    width: 383px;
    height: 50px;
    background-color: rgba(201, 47, 47, 0);
    border: 1px solid #bdccfd;
    margin-bottom: 20px;
  }
  .input::-webkit-input-placeholder {
    color: white;
    font-size: 15px;
    padding-left: 15px;
  }

  .input-message {
    width: 383px;
    height: 96px;
    background-color: rgba(201, 47, 47, 0);
    border: 1px solid #bdccfd;
    color: white;
  }
  .input-message::-webkit-input-placeholder {
    color: white;
    font-size: 15px;
    padding-left: 15px;
  }
  .title {
    font-size: 22px;
    color: white;
    margin-right: 18rem;
    padding-bottom: 15px;
  }
  .button {
    width: 91px;
    height: 33px;
    margin-left: 18.7rem;
  }


`;