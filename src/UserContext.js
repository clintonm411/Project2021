// Importing functions to create and use a Context component
import React, { useReducer, createContext, useCallback } from 'react';


// Create a Context component
export const UserContext = createContext();

// Declare actions for this component
const UPDATE_USER = "UPDATE_USER";

// Declare an initial state for the Context component (i.e, the global state)
const initialState = {
    firstname: localStorage.getItem('firstname') || undefined,
    lastname: localStorage.getItem('lastname') || undefined,
    jsonwebtoken: localStorage.getItem('jsonwebtoken') || undefined,
    loggedIn: localStorage.getItem('firstname') || false,
    email: localStorage.getItem('email') || undefined,
    avatar: localStorage.getItem('avatar') || undefined
}


// The reducer that will change the (global) state
const reducer = (state=false, action) => {
    if(action.type === UPDATE_USER) {
        return {
            ...state,
            ...action.payload
        }
    }
}


// Create the Provider component
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Declare function to send payload to reducer
    const updateUser = useCallback(
        (payload) => {

            // Set the values in the user's computer
            localStorage.setItem('firstname', payload.firstname);
            localStorage.setItem('lastname', payload.lastname);
            localStorage.setItem('email', payload.email);
            localStorage.setItem('avatar', payload.avatar);
            localStorage.setItem('jsonwebtoken', payload.jsonwebtoken);


            dispatch(
                {
                    type: UPDATE_USER,
                    payload: payload
                }
            )
        }, [dispatch]
    );

    return (
        <UserContext.Provider 
            value={{
                firstname: state.firstname,
                lastname: state.lastname,
                jsonwebtoken: state.jsonwebtoken,
                loggedIn: state.loggedIn,
                avatar: state.avatar,
                email: state.email,
                updateUser
            }}
        >{children}
        </UserContext.Provider>

    )
};