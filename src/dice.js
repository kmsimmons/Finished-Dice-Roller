import React, {Component} from 'react';
import App from './App'
import './App.css';
import image from './dice.jpeg'


class Dice extends Component {



    render(){
            // let styles = {
            //     borderRadius: '10%',
            //     borderStyle: 'solid',
            //     borderWidth: 'thick',
            //     height: '200px',
            //     width: '200px',
            // }
            // let styles1 = {
            //     height: '30px',
            //     width: '30px',
            //     borderRadius: '50%',
            //     backgroundColor: 'black',
            // }
        return(
            <div>
                <h1>Click Button to Roll!</h1>
                <button onClick = {this.props.letsRoll} ><img  src = {image} className = 'dice1'/></button>
            </div>
        )
    }
}
export default Dice;
