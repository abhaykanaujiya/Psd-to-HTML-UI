import React from 'react'
import { StyledFooter, StyledFooterCard, StyledImage ,StyledMap} from './style'
import gmap from "../../assets/footer/gmap.svg";
import pointer from "../../assets/footer/pointer.png";
import Form from './Form';
import copyright from "../../assets/footer/copyright.png";
 const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterCard>
        <StyledMap>
          <StyledImage src={gmap} />
          <img className="pointer" src={pointer} />
        </StyledMap>
         <Form/>
      </StyledFooterCard>
      <div className='rights'>
        <img src={copyright} className="copyright-img" />
        <h4>Kodra Theme. All Rights Reseved</h4>
      </div>

    </StyledFooter>
  );
}
export default Footer