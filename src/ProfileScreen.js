import React, { useContext, useEffect } from 'react';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';
import { Link } from 'react-router-dom';

function ProfileScreen() {
    // "initial", "sending", "successful", "unsuccessful"

    const { firstname, lastname, email, avatar, updateUser } = useContext(UserContext);

    // This will store text data and attachments
    const formData = new FormData();

    
    const refresh = () => {

        formData.append('email', email);

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/find`, {
                method: 'POST',
                // headers: {"Content-Type": "application/json"},
                body: formData
        })
            // 2.1 If the submission is successful, set the state "successful"
            .then((backendResponse)=> backendResponse.json())
            .then((theJson)=>{
                console.log(theJson);

                updateUser(
                    {
                        jsonwebtoken: theJson.jsonwebtoken,
                        firstname: theJson.firstname,
                        lastname: theJson.lastname,
                        email: theJson.email,
                        avatar: theJson.avatar
                    }
                )

            })
            // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
            .catch((error)=>{
                console.log(error);
            });

    }

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
                <Link to={`/updateprofile`} className="btn btn-primary me-2" style={{"padding": "10px", "font-size": "12px"}}>Edit</Link>
                

                <button 
                onClick={refresh}
                className="btn btn btn-outline-secondary"
                style={{"padding": "10px", "font-size": "12px"}}>
                    Refresh
                </button>
            
            </div>  
        </div>
    )
}

export default ProfileScreen;