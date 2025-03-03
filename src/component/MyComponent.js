// class component
// function component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "DKID", age: 18 },
            { id: 2, name: "KIDTRINH", age: 19 },
            { id: 3, name: "Dat", age: 20 },
        ],
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        })
    }

    handleDeleteUser = (userId) => {
        // let listUsersClone = [...this.state];
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter((item) => {
            return item.id !== userId
        })
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                    <br />
                    <br />
                    <DisplayInfo
                        listUser={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;