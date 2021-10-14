function Footer(props){
    return(
        <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href={props.link1} className="nav-link px-2 text-muted">{props.label1}</a></li>
            <li className="nav-item"><a href={props.link2}className="nav-link px-2 text-muted">{props.label2}</a></li>
            <li className="nav-item"><a href={props.link3} className="nav-link px-2 text-muted">{props.label3}</a></li>
            {/* <!-- <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li> -->
            <!-- <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Learning-Material</a></li> --> */}
          </ul>
          <p className="text-center text-muted">© 2021 Story Time Haven</p>
        </footer>
      </div>

    );

}

export default Footer;