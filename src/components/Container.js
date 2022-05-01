import React from 'react'
import Menu from './menu'
import Slider from './slider'

export const Container = ({children}) => {
  return (
    <>
   <Menu/>
      {children}
    </>
  );
}
