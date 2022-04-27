import { ListItem, ListItemSecondaryAction } from "@mui/material";
import React from "react";
import { StyledCard, StyledCardDiv, StyledDiv, StyledNav } from "./style";
import { TeamData } from "./TeamData";
const OurTeam = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <h3>Our Team</h3>
      </StyledNav>

      <StyledCardDiv>
        {TeamData.map((item, index) => {
          if (index % 2 == 0) {
            <div>
              <img src={item.Image} />
              <div>
                <div>
                  <img src={item.Google} />
                  <img src={item.Twitter} />
                  <img src={item.Pinterest} />
                  <img src={item.Facebook} />
                </div>
                <div className="description">
                  <p>{item.Description}</p>
                </div>
                <div className="bottum-click">
                  <h6>{item.SeeFull}</h6>
                  <img src={item.Click} />
                </div>
              </div>
            </div>;
          }

          // if the number is odd
          else {
            <div>
              <div>
                <div>
                  <img src={item.Google} />
                  <img src={item.Twitter} />
                  <img src={item.Pinterest} />
                  <img src={item.Facebook} />
                </div>
                <div className="description">
                  <p>{item.Description}</p>
                </div>
                <div className="bottum-click">
                  <h6>{item.SeeFull}</h6>
                  <img src={item.Click} />
                </div>
              </div>
              <img src={item.Image} />
            </div>;
          }
        })}
      </StyledCardDiv>
    </StyledDiv>
  );
};
export default OurTeam;
