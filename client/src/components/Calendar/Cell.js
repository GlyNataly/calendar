import React, { Component } from 'react';
import "../Styles/cell.css";

class Cell extends Component {
    handleMouseMove(e) {
        this.props.onMouseMove(e.buttons & 0x1);
    }

    render() {
        return (
            <li onMouseDown={this.props.onMouseDown} 
                onMouseMove={(e) => this.handleMouseMove(e)} 
                className={`${this.props.busy ? 'selected' : null} hour`} >
            </li>
        ) 
    }
}
export default  Cell
