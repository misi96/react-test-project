import logo from './logo.png'
import React from 'react';
import './Menu_container.css';


const menu_container = () =>{

return (
  <div id="menu_container">
  <div id="header_title">
    <img src={logo}/>
  </div>
  <div id="menu_items">
    <a href="#">Főoldal</a>
    <a href="#">Termék</a>
    <a href="#">GYIK</a>
  </div>
</div>
);
}
export default menu_container;