import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';
class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('>>> call constructor: 1')
        super(props);

        this.state = {
            isShowListUser: true,
        }
    }

    componentDidMount() {
        console.log('>>> call me component did mount');
        setTimeout(() => {
            document.title = 'test';
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component did update', this.props, prevProps);
        if (this.props.listUser !== prevProps.listUser)
            if (this.props.listUser.length == 5)
                alert('You got 5 user');
    }

    handleShowOrHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    }
    render() {
        console.log('>>> call me render: ')
        //props => properties
        //destructuring array/object
        const { listUser } = this.props;
        // console.log(listUser);
        return (
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                {/* button */}
                <div>
                    <button onClick={() => { this.handleShowOrHide() }}>
                        {this.state.isShowListUser ? 'Hide' : 'Show'} List User
                    </button>
                </div> <br />

                {/* render list user */}
                {this.state.isShowListUser &&
                    <>
                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                        <div>
                                            <div>My name is {user.name}</div>
                                            <div>I'm {user.age} years old</div>
                                        </div>
                                        <div>
                                            <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })
                        }
                    </>
                }
            </div>
        );
    }
}

export default DisplayInfo