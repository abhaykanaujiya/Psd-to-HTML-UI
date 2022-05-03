import React from 'react'
import { StyledCard, StyledCardImage, StyledDiv, StyledNav } from './Style'
import feature from "../Offer/JsonData";
const WhatWeOffer = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <h3>What We Offer</h3>
      </StyledNav>
      <div className='card-body'>
        {feature.map((items) => (
          <StyledCard key={items.index}>
            <div className="card-title">
              <div className="title">
                <h3 className='heading'>{items.title}</h3>
                <h5 className='sub-heading'>{items.subTitle}</h5>
              </div>
              <img className="card-title-icon" src={items.icon} />
            </div>
            <StyledCardImage src={items.image}></StyledCardImage>
          </StyledCard>
        ))}
      </div>
    </StyledDiv>
  );
}

export default WhatWeOffer