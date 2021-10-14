import { useState } from 'react';

function RegistrationForm() {

    // RegistrationForm can transition to the following 5 states:
    // (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [state, setState] = useState("initial");

    // (1) Read the values in the input elements
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let termsAndConditions;


    // This will store text data and attachments
    const formData = new FormData();

    function validateEmail (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    function validatePassword (password) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
        return re.test(password);
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
    
        if( !validatePassword(passwordField.value) ) {
            errors.push('Please enter a password');
        }
    
        if( termsAndConditions.checked === false) {
            errors.push('Please accept the terms & conditions');
        }
    
        // If the required fields are valid
        if( errors.length === 0 ) {
            // Register data
        
            fetch(
                'http://localhost:3001/users/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: ''
                }
            )
            .then(
                function(backendResponse) {
                }
            )
            .then(
                function(jsonResponse) {
                }
            )
            .catch(
                function(backendError) {
                }
            )
    
        } 
        // If the required fields are NOT valid
        else {
            // Indicate the error
        }
    }

    return (
        <div className="container" style={{"margin-top": "5em", "max-width": "40em"}}>
            <h1>Register</h1>
            <br/>

            <label>Enter your firstname *</label>
            <input className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input className="field form-control" name="password" autocomplete="off" type="password" />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            <div style={{"display": "none"}} 
            className="alert alert-danger user-errors">
            </div>

            <div style={{"display": "none"}} 
            className="alert alert-success user-success">
            You have registered successfully!
            </div>

            <br/>

            {
                (state !== 'loading' && state !== 'successful') &&
                <button 
                onClick={register}
                className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Register your Interest
                </button>
            }

            {
                state === 'loading' &&
                <p>Loading...</p>
            }

            {
                state === 'validationFailed' &&
                <div className="mt-5 alert alert-danger">Please enter correct details</div>
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


export default RegistrationForm;