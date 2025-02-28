import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true,
    }
    handleShowOrHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    }
    render() {
        //props => properties
        //destructuring array/object
        const { listUser } = this.props;
        // console.log(listUser);
        return (
            <div>
                {/* button */}
                <div>
                    <button onClick={() => { this.handleShowOrHide() }}>
                        {this.state.isShowListUser ? 'Hide' : 'Show'} List User
                    </button>
                </div> <br />
                {/* render list user */}
                {this.state.isShowListUser &&
                    <div>
                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                        <div>My name is {user.name}</div>
                                        <div>I'm {user.age} years old</div>
                                        <hr />
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfo