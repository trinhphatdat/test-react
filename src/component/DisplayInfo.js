import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';
//stateless: không có state, chỉ nhận state từ component cha != stateful

// class DisplayInfo extends React.Component {

//     render() {
//         console.log('>>> call me render: ')
//         //props => properties
//         //destructuring array/object
//         const { listUser } = this.props;
//         // console.log(listUser);
//         return (
//             <div className="display-info-container">
//                 {/* render list user */}
//                 {true &&
//                     <>
//                         {
//                             listUser.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
//                                         <div>
//                                             <div>My name is {user.name}</div>
//                                             <div>I'm {user.age} years old</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                         </div>
//                                         <hr />
//                                     </div>
//                                 );
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props;
    // console.log(props.listUser)
    const [isShowHideListUsers, setShowHideListUsers] = useState(true);

    const handleShowHideListUsers = () => {
        setShowHideListUsers(!isShowHideListUsers);
    }
    return (
        <div div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUsers()}>
                    {isShowHideListUsers == true ? 'Hide' : 'Show'} list users
                </span>
            </div>
            {/* render list user */}
            {isShowHideListUsers &&
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
                                        <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })
                    }
                </>
            }
        </div>
    )
}

export default DisplayInfo