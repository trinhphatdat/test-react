import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Kid',
        address: 'SG',
        age: 18
    };

    handleOnChangeInput = (e) => {
        this.setState({
            name: e.target.value,
        });
    }
    handleOnChangeAge = (e) => {
        this.setState({
            age: e.target.value,
        });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (

            <div>
                my name is {this.state.name} and i'm {this.state.age}
                {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}
                {/* <button onClick={this.handleClick}>Click me</button> */}
                {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}

                <form onSubmit={this.handleOnSubmit}>
                    <label>Your name:</label>
                    <input type='text' onChange={this.handleOnChangeInput} value={this.state.name} />
                    <label>Your age:</label>
                    <input type='text' onChange={this.handleOnChangeAge} value={this.state.age} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default UserInfo;