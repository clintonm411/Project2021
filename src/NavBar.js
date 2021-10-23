import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import NavAvatar from './NavAvatar.js';
import { Link } from 'react-router-dom';
import {UserContext} from './UserContext';
import { Fragment } from 'react/cjs/react.production.min';

function NavBar(props) {

    const { email , avatar, firstname } = useContext(UserContext);

        return(
            <Fragment>
                <header className="p-3 bg-dark text-white">
                   <div className="container">
                        
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img className="rounded-circle border border-white" width="40" height="40" src={props.navImage} alt="logo" />
                            </a>
                    
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href={props.link1.path} className="nav-link px-2 text-secondary">{props.link1.label}</a></li>
                            <li><a href={props.link2.path} className="nav-link px-2 text-white">{props.link2.label}</a></li>
                            <li><a href={props.link3.path} className="nav-link px-2 text-white">{props.link3.label}</a></li>
                            </ul>
                    
                            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                            </form> */}

                            <div className="px-2 text-end">
                                { !email && (
                                <Fragment>
                                    <Link to={`/login`} className="btn btn-outline-light me-2">Login</Link>
                                    <Link to={`/register`} className="btn btn-warning">
                                            Register
                                    </Link>

                                </Fragment>

                                )
                                        

                                        
                                }
                                { email && (
                                    <Fragment>
                                        <Link to={`/profile`} className="btn btn-outline-light me-2">{firstname}</Link> 
                                    </Fragment>
                                )    
                                }    
                            </div>
                            { avatar && 
                                <NavAvatar avatar={avatar}></NavAvatar>
                            }
                            { (!avatar && email) && 
                                <NavAvatar avatar={props.navImage}></NavAvatar>
                            }
                            
                    
                        </div>
                    </div>
                </header>

            </Fragment>
            
    );
}

export default NavBar;