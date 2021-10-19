import logo from './logo.svg';

function NavBar(props) {
        return(
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
                    <a href="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
                    <a href={props.signUp.path}><button type="button" className="btn btn-warning">{props.signUp.label}</button></a>
                    </div>

                    <div class="dropdown text-end">
                        <a href="#" 
                        class="d-block link-light text-decoration-none dropdown-toggle" 
                        id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={props.avatar} alt="mdo" width="32" height="32" class="rounded-circle"/>
                        </a>
                        <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="logout">Log out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;