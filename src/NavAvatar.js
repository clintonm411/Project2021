import { Fragment } from "react";

function NavAvatar(props){

    return(
        <Fragment>
            <div class="dropdown text-end">
                <a href="#" 
                class="d-block link-light text-decoration-none dropdown-toggle" 
                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={props.avatar} alt="mdo" width="32" height="32" class="rounded-circle"/>
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="/users/profile" >Profile</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a  class="dropdown-item" href="/users/logoff">Log out</a></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default NavAvatar;