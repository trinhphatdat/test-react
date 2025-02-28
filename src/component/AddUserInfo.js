import React from "react";

class AddUserInfo extends React.Component {

    state = {
        name: '',
        address: 'SG',
        age: '',
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
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: this.state.name,
            age: this.state.age,
        });
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
export default AddUserInfo;