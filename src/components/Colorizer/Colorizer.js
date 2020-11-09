import React, { Component } from 'react';
import './colorizer.css';
class Colorizer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            color: "",
            bgColor: "white"
        };
        this.setColor = this.setColor.bind(this)
        this.setBgColor = this.setBgColor.bind(this)
    };


    setBgColor(e){
        this.setState({
            color: e.target.value,
            bgColor: this.state.color 
        }) 
    }
    setColor (e){
        this.setState({
            bgColor: this.state.color, 
        });
        this._input.focus();
        this._input.value = "";
        e.preventDefault();
    };
    

    render() {
        
        var squareStyle = {
            backgroundColor: this.state.bgColor
        };  
        var textStyle = {
            color: this.state.bgColor
        }
        let spanColor = {
            color: 'black'
        }
        var self  = this
        return (
            <div className="colorArea">
                <h1 style={textStyle}><span style={spanColor}>Цвет: </span>{this.state.color.toUpperCase()}</h1>
                <div style={squareStyle} className="colorSquare"></div>

                <form  onSubmit={this.setColor}>
                    <input placeholder="Значение цвета" onChange={this.setBgColor}
                    ref={
                        (el)=>{self._input = el}
                    }
                    ></input>
                    <button type="submit">ok</button>
                </form>

            </div>
        );
    }
}

export default Colorizer;