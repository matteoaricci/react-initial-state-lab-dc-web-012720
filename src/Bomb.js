import React from "react";

// your Bomb code here!
class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        let time = this.state.secondsLeft;
        function message(time){
            if (time > 0) {
               return `${time} seconds left before I go boom!`
            } else {
                return 'Boom!'
            }
        }
        return (
            <p>{message(time)}</p>
            )
        }
    }


export default Bomb