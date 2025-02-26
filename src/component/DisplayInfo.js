import React from "react";

class DisplayInfo extends React.Component {
    render() {
        //props => properties
        //destructuring array/object
        const { listUser } = this.props;
        return (
            <div>
                {
                    listUser.map((user) => {
                        return (
                            <div key={user.id}>
                                <div>My name is {user.name}</div>
                                <div>I'm {user.age} years old</div>
                                <hr />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default DisplayInfo