import React, {Component} from 'react';
class Rolls extends Component {


    render(){
        return (
            <div>

                <h1>Dice Log</h1>
                <div>
                <h1>{this.props.rolls + ''}</h1>
                </div>
            </div>
        )
    }
}
export default Rolls;
