import React, { Component } from 'react';
import CalendarHeader from "./CalendarHeader";
import AllDays from "./AllDays";
import CalendarBottomButtons from "./CalendarBottomButtons";
import "../Styles/main.css";

class Main extends Component {
  render() {    
    return (
      <main draggable="false" className = "layout">
        <CalendarHeader/>
        <AllDays/>
        <CalendarBottomButtons/> 
      </main>
    );
  }
}

export default Main;