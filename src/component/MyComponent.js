// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Kid',
        address: 'SG',
        age: 18
    };

    handleClick = () => {
        console.log('My name is ', this.state.name, " and i'm ", this.state.age)
        this.setState({
            name: 'dkid',
            age: Math.floor((Math.random() * 100) + 1),
        });
    }
    handleOnMouseOver = (e) => {
        // console.log(e.screenX)
    }
    handleOnChangeInput = (e) => {
        this.setState({
            name: e.target.value,
        });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    //JSX
    render() {
        return (
            <div>
                my name is {this.state.name} and i'm {this.state.age}
                {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}
                {/* <button onClick={this.handleClick}>Click me</button> */}
                {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' onChange={this.handleOnChangeInput} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;