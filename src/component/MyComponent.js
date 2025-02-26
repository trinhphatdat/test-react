// class component
// function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "DKID", age: 18 },
            { id: 2, name: "KIDTRINH", age: 19 },
            { id: 3, name: "Dat", age: 20 },
        ],
    }
    render() {
        return (
            <div>
                <UserInfo></UserInfo>
                <br />
                <br />
                <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;