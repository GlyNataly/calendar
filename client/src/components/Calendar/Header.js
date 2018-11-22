import React from 'react';
import "../Styles/header.css";

const Header = (props) => (
    <header>{props.title.toUpperCase()}</header>
);
  
export default Header;