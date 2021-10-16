function Card(props) {
    let cardUrl = 'url(' + props.image + ")";
    return (        

    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{"background-image": cardUrl}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-1 mt-1 mb-1 display-6 lh-1 fw-bold">{props.title}</h2>
            <p className="p-1 mb-1 lh-1">{props.description}</p>
            
              {
                (props.youtubeEmbedLink) &&
                <div className="ratio ratio-1x1 mt-3 mb-3">
                <iframe src={props.youtubeEmbedLink} title="YouTube video" allowfullscreen></iframe>
                </div>
              }
              {
                !(props.youtubeEmbedLink) &&
                <h2>Coming Soon</h2>
              }
                      
            
            
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <a href="/about"><img src="https://res.cloudinary.com/dxfkzwedw/image/upload/v1634393258/story_time_haven_unecpa.jpg" width="32" height="32" className="rounded-circle border border-white"/></a>
              </li>
              <li className="d-flex align-items-center me-3">
                {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                <small>Earth</small>
              </li>
              <li className="d-flex align-items-center">
                {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>

    );
}

export default Card;