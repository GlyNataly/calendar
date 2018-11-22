import React, { Component } from 'react';
import "../Styles/row.css";
import Cell from "./Cell";
import { cellMouseMove, allDayClick, cellMouseDown } from '../../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  onCellMouseMove: (lButtonPressed, day, hour) => dispatch(cellMouseMove(lButtonPressed, day, hour)),
  onCellMouseDown: (day, hour) => dispatch(cellMouseDown(day, hour)),
  allDayClick: day => dispatch(allDayClick(day))
});

class Row extends Component {
    allDayBusy() {    
      return this.props.day.hours.every(h => h.busy);
    }
  
    render() {    
      return (
        <div className="row">
            <div className={`${this.allDayBusy() ? 'full-dayName': null} days`}>{this.props.day.name.toUpperCase()}</div>
            <div className={`${this.allDayBusy() ? 'full-day': null} all-day`} onClick={() => this.props.allDayClick(this.props.day.id)}></div>
            <ul className= "times">
                {this.props.day.hours.map(h =>  
                  <Cell key={this.props.day.id + h.id + ''} 
                        busy={h.busy} 
                        onMouseDown={() => this.props.onCellMouseDown(this.props.day.id, h.id)}
                        onMouseMove={lBtnPressed => this.props.onCellMouseMove(lBtnPressed, this.props.day.id, h.id)}
                  />
                  )}
            </ul> 
        </div>
      );   
    }
  }
  
export default connect(null, mapDispatchToProps)(Row);