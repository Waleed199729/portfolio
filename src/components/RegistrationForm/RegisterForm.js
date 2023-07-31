import React, { useState } from 'react';
import './RegisterForm.css'


const NestedForm = () => {

    const [userList, setUserList] = useState([
        {
            firstname: '',
            lastname: '',
            email: '',
            serviceList: [{ subject: '', grade: '', school: '', passingyear: '' }]
        }
    ]);                                       //ham ne array me 1 object bana kr array pass krwai 

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedUserList = [...userList];
        updatedUserList[index] = {
            ...updatedUserList[index],
            [name]: value
        };
        setUserList(updatedUserList);
    };

    const handleServiceInputChange = (userIndex, serviceIndex, event) => {
        const { name, value } = event.target;
        const updatedUserList = [...userList];
        updatedUserList[userIndex].serviceList[serviceIndex] = {
            ...updatedUserList[userIndex].serviceList[serviceIndex],
            [name]: value
        };
        setUserList(updatedUserList);
    };

    const addService = (userIndex) => {
        const updatedUserList = [...userList];
        updatedUserList[userIndex].serviceList.push({
            subject: '',
            grade: '',
            school: '',
            passingyear: ''
        });
        setUserList(updatedUserList);
    };

    const removeService = (userIndex, serviceIndex) => {
        const updatedUserList = [...userList];
        updatedUserList[userIndex].serviceList.splice(serviceIndex, 1);
        setUserList(updatedUserList);
    };



    const handleSubmit = (event) => {
        console.log(userList)
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <div className="educational__requirement">
                    {userList.map((user, userIndex) => (
                        <div className="matric__requirement my-3" key={userIndex}>
                            <input
                                type="text"
                                name="firstname"
                                value={user.firstname}
                                onChange={(e) => handleInputChange(userIndex, e)}
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                name="lastname"
                                value={user.lastname}
                                onChange={(e) => handleInputChange(userIndex, e)}
                                placeholder="Last Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={(e) => handleInputChange(userIndex, e)}
                                placeholder="Email"
                            />

                            {user.serviceList.map((service, serviceIndex) => (
                                <div key={serviceIndex}>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={service.subject}
                                        onChange={(e) => handleServiceInputChange(userIndex, serviceIndex, e)}
                                        placeholder="Subject"
                                    />
                                    <input
                                        type="text"
                                        name="grade"
                                        value={service.grade}
                                        onChange={(e) => handleServiceInputChange(userIndex, serviceIndex, e)}
                                        placeholder="Grade"
                                    />
                                    <input
                                        type="text"
                                        name="school"
                                        value={service.school}
                                        onChange={(e) => handleServiceInputChange(userIndex, serviceIndex, e)}
                                        placeholder="School"
                                    />
                                    <input
                                        type="text"
                                        name="passingyear"
                                        value={service.passingyear}
                                        onChange={(e) => handleServiceInputChange(userIndex, serviceIndex, e)}
                                        placeholder="Passing Year"
                                    />

                                    <button className='my-3' onClick={() => removeService(userIndex, serviceIndex)}>Remove</button>
                                </div>
                            ))}

                            <button className='my-3' onClick={() => addService(userIndex)}>Add Service</button>
                        </div>
                    ))}
                </div>
                <button>Submit</button>
            </form>

        </>

    )

}


export default NestedForm;