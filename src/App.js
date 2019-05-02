import React, { Component }from 'react';
import './App.css';
import Dice from './dice';
import Rolls from './rolls';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
        dice : '',
        rolls : [],
        }
    }
    letsRoll = () => {
    let {dice, rolls} = this.state
    let diceRoll = Math.floor( Math.random() * 6 + 1 )
    this.setState({dice: diceRoll})
    // console.log(diceRoll);
    rolls.push(diceRoll)
    this.setState({rolls: rolls})



    }

    render(){
        let { dice } = this.state
        return (
            <div className="App1">
                <Dice dice = {dice}
                letsRoll = {this.letsRoll}/>
                <Rolls rolls = {this.state.rolls}
                letsRoll = {this.letsRoll}/>

            </div>
)};
}

export default App;
