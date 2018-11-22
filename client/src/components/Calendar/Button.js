import React from 'react';
import "../Styles/button.css";

const Button = (props) => (
    <button className = "button" type="button" onClick={props.onClick}> {props.text}</button>
);
  
export default Button;