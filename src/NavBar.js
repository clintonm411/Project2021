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
                <li><a href={props.link1} className="nav-link px-2 text-secondary">{props.label1}</a></li>
                <li><a href={props.link2} className="nav-link px-2 text-white">{props.label2}</a></li>
                <li><a href={props.link3} className="nav-link px-2 text-white">{props.label3}</a></li>
                </ul>
        
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                </form>
        
                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
            </div>
            </div>
        </header>
    );
}

export default NavBar;