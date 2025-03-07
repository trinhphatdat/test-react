import React, { useState } from "react";

// class AddUserInfo extends React.Component {

//     state = {
//         name: '',
//         address: 'SG',
//         age: '',
//     };

//     handleOnChangeInput = (e) => {
//         this.setState({
//             name: e.target.value, //target.value: lấy giá trị được nhập trong ô input
//         });
//     }
//     handleOnChangeAge = (e) => {
//         this.setState({
//             age: e.target.value, //target.value: lấy giá trị được nhập trong ô input
//         });
//     }

//     handleOnSubmit = (e) => {
//         e.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age,
//         }) //...setState, add user
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleOnSubmit}>
//                     <label>Your name:</label>
//                     <input type='text' onChange={this.handleOnChangeInput} value={this.state.name} />
//                     <label>Your age:</label>
//                     <input type='text' onChange={this.handleOnChangeAge} value={this.state.age} />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfo = (props) => {
    //State
    const [name, setName] = useState('')
    const [address, setAddress] = useState('SG')
    const [age, setAge] = useState('')

    const handleOnChangeInput = (e) => {
        setName(e.target.value)
    }
    const handleOnChangeAge = (e) => {
        setAge(e.target.value) //target.value: lấy giá trị được nhập trong ô input
    }

    //Add 1 user
    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: name,
            age: age,
            //...setState, add user
        })

    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Your name:</label>
                <input type='text' onChange={handleOnChangeInput} value={name} />
                <label>Your age:</label>
                <input type='text' onChange={handleOnChangeAge} value={age} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;