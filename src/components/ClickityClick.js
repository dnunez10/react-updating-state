// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return{
                hasBeenClicked: !prevState.hasBeenClicked
            }            
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }

}

