import styled from "styled-components";
import { css } from "styled-components";

export const StyledBlog = styled.div`

`
export const StyledBlogNav = styled.div`
  width: 925px;
  height: 91px;
  display:flex ;
  align-items: center;
  padding-left:20px ;

`;
export const BlogsCard = styled.div`
position:relative ;

`;
export const StyledCard = styled.div`
  position: relative;
  display: flex;
  .card-details {
    border: 1px solid;
    padding-left: 10px;
    padding-right: 5px;
  }

  .comment {
    margin-top: 20px;
    width: 16px;
    height: 16px;
  }
  .post-info {
    display: flex;
    flex-flow: row;
  }
  .user-name {
    margin-right: 20px;
  }
  .post-time {
    margin-right: 20px;
  }
`; 

export const StyledButton = styled.div`
  
    border: 1px solid #5077fb;
    width: 119px;
    height: 41px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #5077fb;
    background-color: rgba(80, 119, 251, 0);
  
  ${(props) =>
    props.id === "1" &&
    css`
      border: 3px solid;
      `}
`;