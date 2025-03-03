// class component
// function component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "DKID", age: 18 },
            { id: 2, name: "KIDTRINH", age: 19 },
            { id: 3, name: "Dat", age: 20 },
        ],
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser],
        })
    }

    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                    <br />
                    <br />
                    <DisplayInfo listUser={this.state.listUser} />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;