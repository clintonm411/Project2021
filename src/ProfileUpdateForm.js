import { useState } from 'react';
import React, { useContext, useEffect } from 'react';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';
import { Link } from 'react-router-dom';



function ProfileUpdateForm() {

    const { firstname, lastname, email, avatar, updateUser } = useContext(UserContext);

    // RegistrationForm can transition to the following 5 states:
    // (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [state, setState] = useState("initial");
    const [formErrors, setFormErrors] = useState([]);

    // (1) Read the values in the input elements
    let firstNameField;
    let lastNameField;
    let emailField;
    let termsAndConditionsField;
    let avatarField;

    // This will store text data and attachments
    const formData = new FormData();

    function validateEmail (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function attachFile(evt) {

        
        // Create an array from the attachment(s)
        const files = Array.from(evt.target.files);
        console.log('attachFile', files)

        // For each attachment, append the file to formData
        files.forEach(
            function(fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }
    
    function register() {
            
    
        // (2) Validate the value
        const errors = [];
    
        if( firstNameField.value.length === 0 ) {
            errors.push('Please enter first name');
        }
    
        if( lastNameField.value.length === 0 ) {
            errors.push('Please enter last name');
        }
    
        if( !validateEmail(emailField.value) ) {
            errors.push('Please enter valid email');
        }
    
        if( termsAndConditionsField.checked === false) {
            errors.push('Are you sure you want to update?');
        }
    


        // If the required fields are valid
        if( errors.length === 0 ) {
            // Show the preloader
            setState("loading")

            // Prepare formData for backend
            formData.append('firstname', firstNameField.value);
            formData.append('lastname', lastNameField.value);
            formData.append('email', emailField.value);



            // Register data
            fetch(
                `${process.env.REACT_APP_BACKEND_URL}/users/update`,
                {
                    method: 'POST',
                    headers: {
                        // 'Content-type': 'application/json'
                    },
                    body: formData
                }
            )
            // Convert encoded string to JSON
            .then(
                function(backendResponse) {
                    return backendResponse.json()
                }
            )
            .then(
                function(jsonResponse) {
                    if(jsonResponse.email) {
                        console.log(jsonResponse);

                updateUser(
                    {
                        jsonwebtoken: jsonResponse.jsonwebtoken,
                        firstname: jsonResponse.firstname,
                        lastname: jsonResponse.lastname,
                        email: jsonResponse.email,
                        avatar: jsonResponse.avatar
                    }
                )
                setState("successful");
                        
                    } else {
                        setState("unsuccessful")
                    }   
                }
            )
            .catch(
                function(backendError) {
                    setState("unsuccessful");
                }
            )
    
        } 
        // If the required fields are NOT valid
        else {
            // Indicate the error
            setState("validationFailed");
            setFormErrors(errors);
        }
    }

    return (
        <div className="container" style={{"margin-top": "5em", "max-width": "40em"}}>
            <h1>Register</h1>
            <br/>

            <label>Enter your firstname *</label>
            <input ref={
                function(theComponent) {
                    firstNameField = theComponent
                }
            } className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input ref={
                function(theComponent) {
                    lastNameField = theComponent
                }
            } 
            className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input ref={
                function(theComponent) {
                    emailField = theComponent
                }
            } 
            className="field form-control" name="email" type="text"  value={email} />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input ref={
                function(theComponent) {
                    avatarField = theComponent
                }
            } 

            onClick={attachFile}    
            onChange={attachFile}
            className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input ref={
                function(theComponent) {
                    termsAndConditionsField = theComponent
                }
            }
            className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            {
                (state !== 'loading' && state !== 'successful') &&
                <button 
                onClick={register}
                className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Update
                </button>
            }

            {
                state === 'loading' &&
                <p>Loading...</p>
            }

            {
                state === 'validationFailed' &&
                <div className="mt-5 alert alert-danger">
                    Please enter correct details
                    
                    <ul>
                    {
                        formErrors.map(
                            function(message) {
                                return (
                                    <li>{message}</li>
                                )
                           }
                        ) 
                    }
                    </ul>

                </div>
            }

            {
                state === 'successful' &&
                <div className="alert alert-success">Account created successfully</div>
            }

            {
                state === 'unsuccessful' &&
                <div className="mt-5 alert alert-danger">Something went wrong. Please try again.</div>
            }
        </div>
    )
}


export default ProfileUpdateForm;