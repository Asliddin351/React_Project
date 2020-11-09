import React, { Component } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';
import './menuBtn.css';

class MenuContainer extends Component  {

    constructor(props){
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    handleMouseDown(e){
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }

 

    render(){
        return (
            <div>
                <MenuButton handleMouseDown = {this.handleMouseDown} />
                <Menu handleMouseDown = {this.handleMouseDown}
                 menuVisibility = {this.state.visible}/>
                <p>Найдешь пункт, который здесь лишний? </p>
                <ul className="menu">
                    <li>Lorem</li>
                    <li>Ipson</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                    <li>Bunbelen</li>
                </ul>
            </div>
        );
    }
}

export default MenuContainer;
