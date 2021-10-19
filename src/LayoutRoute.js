import React from 'react';
import { Route } from 'react-router-dom'; 
import NavBar from './NavBar';
import Footer from './Footer';

function LayoutRoute(props) {
    return (
        <React.Fragment>
            <NavBar 
                link1={{label:"Home", path: "/"}} 
                link2={{label: "About", path: "/about"}} 
                link3={{label: "Podcasts", path: "/podcasts"}}
                navImage="https://res.cloudinary.com/dxfkzwedw/image/upload/v1634393258/story_time_haven_unecpa.jpg"
                signUp={{label: "Register", path: "/register"}}
            ></NavBar>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer
                label1 = "Home" link1="/home"
                label2 = "About" link2="/about"
                label3 = "Podcasts" link3="/podcasts"
            ></Footer>
        </React.Fragment>
    )
}

export default LayoutRoute;