import { Fragment } from "react";
import { Link } from 'react-router-dom';

function NavAvatar(props){

    return(
        <Fragment>
                
                <a href="#" 
                className="d-block link-light text-decoration-none dropdown-toggle" 
                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={props.avatar} alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><Link to={`/profile`} className="dropdown-item">Profile</Link></li>
                    <li><hr className="dropdown-divider"/></li>                   
                    <li><a  className="dropdown-item" 
                    onClick={
                        function(){
                            localStorage.clear();
                        }
                    }
                    href="/login">Log out</a></li>
                </ul>

        </Fragment>
    )
}

export default NavAvatar;