import React, { Component } from 'react';
import Row from "./Row";
import "../Styles/all-day.css";
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  days: state.days
});

class AllDays extends Component {
  render() {    
    return (
      <div className = "wrap-days">
          {
            this.props.days.map(d => (
              <Row  
                key={d.id}
                day={d}
              />
            ))
          }
      </div>
    );
  }
}

export default connect(mapStateToProps)(AllDays);