import React, { Component } from 'react';
import Button from "./Button";
import "../Styles/calendarBottomButtons.css";
import { clear, setData } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  days: state.days
})

const mapDispatchToProps = dispatch => ({
  onClear: () => {
    dispatch(clear())}
});

class CalendarBottomButtons extends Component {
  handleSave() {
    setData(this.props.days);
  }
  
  render() {  
    return (
        <div className="wrap-but">
          <Button key="Clear" text="Clear" onClick={this.props.onClear}/>
          <Button key="Save Changes" text="Save Changes" onClick={() => this.handleSave()} />          
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBottomButtons);