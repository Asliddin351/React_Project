import React, { PureComponent } from 'react';
import './menuBtn.css';

class MenuButton extends PureComponent {

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.handleMouseDown === this.props.handleMouseDown){
            return false
        }else{
            return true
        }
    }

    render() {
        return (
            <div>
                <button id="roundButton"
                onClick={this.props.handleMouseDown}
                ></button>
            </div>
        );
    }
}

export default MenuButton;
