import { ListItem, ListItemSecondaryAction } from "@mui/material";
import React from "react";
import {
  StyledBottumNav,
  StyledCard,
  StyledCardDiv,
  StyledCardInfo,
  StyledDescription,
  StyledDiv,
  StyledIconImg,
  StyledIcons,
  StyledNav,
} from "./style";
import { TeamData } from "./TeamData";
const OurTeam = () => {
  console.log();
  return (
    <StyledDiv>
      <StyledNav>
        <h3 className="heading">Our Team</h3>
      </StyledNav>

      <StyledCardDiv>
        {TeamData.map((item, index) => (
          <>
            {index % 2 == 0 ? (
              <StyledCard>
                <img className="c-img" src={item.Image} />
                <StyledCardInfo>
                  <StyledIcons>
                    <StyledIconImg src={item.Google} />
                    <StyledIconImg src={item.Twitter} />
                    <StyledIconImg src={item.Pinterest} />
                    <StyledIconImg src={item.Facebook} />
                  </StyledIcons>
                  <StyledDescription className="description">
                    <p className="d-para">{item.DescriptionA}</p>
                    <br></br>
                    <p className="d-para">{item.DescriptionB}</p>
                  </StyledDescription>
                  <StyledBottumNav className="bottum-click">
                    <h6>{item.SeeFull}</h6>
                    <img className="b-img" src={item.Click} />
                  </StyledBottumNav>
                </StyledCardInfo>
              </StyledCard>
            ) : (
              <StyledCard>
                <StyledCardInfo>
                  <StyledIcons>
                    <StyledIconImg src={item.Google} />
                    <StyledIconImg src={item.Twitter} />
                    <StyledIconImg src={item.Pinterest} />
                    <StyledIconImg src={item.Facebook} />
                  </StyledIcons>
                  <StyledDescription className="description">
                    <p className="d-para">{item.DescriptionA}</p>
                    <br></br>
                    <p className="d-para">{item.DescriptionB}</p>
                  </StyledDescription>
                  <StyledBottumNav className="bottum-click">
                    <h6>{item.SeeFull}</h6>
                    <img src={item.Click} />
                  </StyledBottumNav>
                </StyledCardInfo>
                <img className="c-img" src={item.Image} />
              </StyledCard>
            )}
          </>
        ))}
      </StyledCardDiv>
    </StyledDiv>
  );
};
export default OurTeam;
