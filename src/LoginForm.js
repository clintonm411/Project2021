import { useState } from 'react';

function LoginForm() {

    // LoginForm can transition to the following 5 states:
    // (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [state, setState] = useState("initial");

    // (1) Read the values in the input elements
    let emailField;
    let passwordField;
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
    
    function loginUser() {
            
    
        // (2) Validate the value
        const errors = [];
    
        if( !validateEmail(emailField.value) ) {
            errors.push('Please enter valid email');
        }
    
        if( !validatePassword(passwordField.value) ) {
            errors.push('Please enter a password');
        }
    
        // if( termsAndConditions.checked === false) {
        //     errors.push('Please accept the terms & conditions');
        // }
    
        // If the required fields are valid
        if( errors.length === 0 ) {
            // Login
        
            fetch(
                'http://localhost:3001/users/login',
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
            <h1>Login</h1>
            <br/>

            <label>Enter your email *</label>
            <input className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input className="field form-control" name="password" autocomplete="off" type="password" />

            <div style={{"display": "none"}} 
            className="alert alert-danger user-errors">
            </div>

            <div style={{"display": "none"}} 
            className="alert alert-success user-success">
            Login successful!
            </div>

            <br/>

            {
                (state !== 'loading' && state !== 'successful') &&
                <button 
                onClick={loginUser}
                className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Login
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
                <div className="alert alert-success">Login successfully</div>
            }

            {
                state === 'unsuccessful' &&
                <div className="mt-5 alert alert-danger">Something went wrong. Please try again.</div>
            }
        </div>
    )
}


export default LoginForm;