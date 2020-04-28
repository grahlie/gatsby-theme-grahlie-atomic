import React from "react";

import './burgericon.css'

const BurgerIcon = ({ open, color, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div style={{backgroundColor: open ? '#fff' : color}} className="bar1" key="b1" />
    <div style={{backgroundColor: open ? '#fff' : color}} className="bar2" key="b2" />
    <div style={{backgroundColor: open ? '#fff' : color}} className="bar3" key="b3" />
  </div>
);

export default BurgerIcon
