
import React, { useState } from 'react'
import menu from "../../assets/ourWork/menu.svg"
import Blogs from '../blogPost/Blogs'
import { Cards } from '../Cards/Cards'
import WhatWeOffer from '../Offer/WhatWeOffer'
import OurTeam from '../ourTeam/OurTeam'
import { StyledWork } from './style'
const OurWorkNav = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <StyledWork >
      <div className='container-work'>
        <h4>Our Work</h4>
        <img src={menu} onClick={ handleToggle}/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Blogs />
      </div>
      <div><WhatWeOffer /></div>
      <div>
        <OurTeam/>
      </div>
    </StyledWork>
  )
}
export default OurWorkNav