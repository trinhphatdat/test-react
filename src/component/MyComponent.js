// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'dkid',
        address: 'SG',
        age: 18
    };

    handleClick() {
        console.log('You was clicked me!!')
    }
    handleOnMouseOver(e) {
        console.log(e.screenX)
    }
    //JSX
    render() {
        return (
            <div>
                my name is {this.state.name} and i'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;