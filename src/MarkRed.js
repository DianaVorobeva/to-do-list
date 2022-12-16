import { Component } from "react";
import blurFlag from './blurFlag.png';
import redFlag from './redFlag.png';

export class MarkRed extends Component {
    state = {
        image: blurFlag
    }

    changeColor = ()=> {
        this.setState({
            image: redFlag
        })
    }

    render() {
        return (
            <div>
                <button className="redFlag" onClick={this.changeColor}><img src={this.state.image} alt="Flag" width="30px"/></button>
                
            </div>
        )
    }
}