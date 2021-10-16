function Hero(props){
    return(
    <div className="px-4 py-0.5 text-center">
        <img className="d-block mx-auto mb-4 img-fluid" src={props.heroImage} alt="Logo" width="700"/>
        <h1 className="display-5 fw-bold">{props.heroName}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{props.description}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {/* <!-- <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Learn More</button> --> */}
            <a href="#feature1" className="btn btn-primary btn-lg" tabindex="-1" role="button" aria-disabled="true">Learn More</a>
          </div>
        </div>
    </div>
    );
}


export default Hero;