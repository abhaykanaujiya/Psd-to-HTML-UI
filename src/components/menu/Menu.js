import React from "react";
import { StyledDiv, StyledImg, StyledNav, StyledItems } from "./Style";
import mauntain from "../../assets/sidemenu/mountains.svg";
import search from "../../assets/searchsvg.svg";
import one from "../../assets/sidemenu/one.svg";
import two from "../../assets/sidemenu/two.svg";
import three from "../../assets/sidemenu/three.svg";
import four from "../../assets/sidemenu/four.svg";
import five from "../../assets/sidemenu/five.svg";
import six from "../../assets/sidemenu/six.svg";
import seven from "../../assets/sidemenu/seven.svg";
import eight from "../../assets/sidemenu/eight.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import pinterest from "../../assets/pinterest.svg";
import twitter from "../../assets/twitter.svg";



export const Menu = () => {
  const shots = [one, two, three, four, five, six, seven, eight];
  const social=[google,twitter,pinterest,facebook]
  console.log(search);
  const menuItems = [
    "Home",
    "About",
    "Portfolio",
    "Services",
    "Blog",
    "Contact",
  ];
  return (
    <StyledNav>
      <StyledDiv>
        <div className="logo-container">
          <StyledImg src={mauntain} />
          <h2 className="company-name">K O D R A</h2>
          <div className="logo-p">
            <p className="p1">Responsive Multi-concept</p>
            <p className="p2">WordPress Theme</p>
          </div>
        </div>
        <div className="menu">
          <div className="menu-items">
            {menuItems.map((items, index) => (
              <StyledItems className="typography-text" key={items.index} index={ index}>
                {items}<div className="line" style={{display:index==0?"block":"none"}}></div>
              </StyledItems>
            ))}
          </div>
        </div>
        <div className="nav-bottum">
          <div className="nav-bottom-items">
            <div className="search">
              <input className="input-field" placeholder="Search" />
              <img className="search-image" src={search} />
            </div>
            <div className="dribble-shots">
              <div className="heading-shots">
                <h4>Shots from Dribbble</h4>
              </div>
              <div className="shots">
                {shots.map((items) => (
                  <img className="shot" src={items} alt="img" />
                ))}
              </div>
            </div>
            <div className="social">
              <h3 className="social-heading">Social Network</h3>
              <div className="social-icons">
                <div className="icons">
                  {social.map((items) => (
                    <img className="icon-img" src={items} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledDiv>
    </StyledNav>
  );
};
