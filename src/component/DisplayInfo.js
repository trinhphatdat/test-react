import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';
//stateless: không có state, chỉ nhận state từ component cha != stateful

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowHideListUsers, setShowHideListUsers] = useState(true);

    const handleShowHideListUsers = () => {
        setShowHideListUsers(!isShowHideListUsers);
    }

    //làm ảnh hưởng đến web -> chạy sau khi web đã render
    //useEffect(()=>{}, [empty]) -> giúp hàm này chỉ chạy 1 lần
    useEffect(
        () => {
            if (listUsers.length == 0) {
                alert('You deleted all')
            }
            console.log('>>> call me use effect')
        }, [listUsers]
    );

    return (
        <div div className="display-info-container">
            <div>
                <button onClick={() => handleShowHideListUsers()}>
                    {isShowHideListUsers == true ? 'Hide' : 'Show'} list users
                </button>
            </div>
            {/* render list user */}
            {isShowHideListUsers &&
                <>
                    {
                        listUsers.map((user) => {
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