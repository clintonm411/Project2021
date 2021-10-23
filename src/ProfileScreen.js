import React, { useContext } from 'react';
import NavBar from './NavBar';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function ProfileScreen() {

    const { firstname, lastname, email, avatar, updateUser } = useContext(UserContext);

    return (
        <div>
            <div className="container py-5" style={{maxWidth: 600, minHeight: "calc(100vh - 112px)"}}>
                <h1>My Profile</h1>
                <div>
                    <ul>
                        <li>{firstname}</li>
                        <li>{lastname}</li>
                        <li>{email}</li>
                        <li>{avatar}</li>
                    </ul>
                </div>
            </div>  
        </div>
    )
}

export default ProfileScreen;