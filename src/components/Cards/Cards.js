import React from "react";
import { StyledCard, CardImage, Icons, StyledDescription, StyledSearchIcon, StyledHoverImage, StyledCurveLogo } from "./StyleCard";
import { cardDetails, Portfoliohoverblue } from "./Asset";
export const Cards = () => {
  return (
    <StyledCard className="card">
      <div className="card-container">
        {cardDetails.map((items) => (
          <div className="card-items">
            <CardImage
              id={items.id}
              className="card-img"
              src={items.image}
              type={items.type}
            />
            <StyledHoverImage src={items.hover} id={items.id} />
            <StyledCurveLogo src={items.curve}id={items.id} />
            <Icons type={items.type} id={ items.id}>
              <StyledSearchIcon className="search-icon-container" id={items.id} >
                <img className="search-icon" src={items.icons.search} />
     
              </StyledSearchIcon>
              <div className="file-icon-container">
                <img className="file-icon" src={items.icons.save} />
              </div>
            </Icons>
            <StyledDescription className="description-container" id={ items.id}type={items.type} >
              <h5 className="description-heading">{items.title}</h5>
              <h6 className="description-para">{items.subHeading}</h6>
            </StyledDescription>
          </div>
        ))}
      </div>
    </StyledCard>
  );
};
