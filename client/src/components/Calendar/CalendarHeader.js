import React, { Component } from 'react';
import "../Styles/calendar-header.css";

class CalendarHeader extends Component {
  render() {    
    const hours = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00","21:00"];
    return (
        <div className="row">
                <div className="h-days"></div>
                <div className = "h-all-day">{"all day".toUpperCase()}</div>
                <ul className= "times">
                    {
                        hours.map(hour => <li key={hour}  className = "hours">{hour}</li>)
                    }
                </ul>        
        </div>
    );
  }
}

export default CalendarHeader;