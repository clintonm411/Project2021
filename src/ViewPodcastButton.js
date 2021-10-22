import { Fragment } from "react/cjs/react.production.min";

function ViewPodcastButton(props){
    let podcastName = props.podcastName;
    return(
        
        <Fragment>
            <a href={props.buttonUrl}><button type="button" className="btn btn-sm btn-outline-info">Edit</button></a>
        </Fragment>

    );
}

export default ViewPodcastButton;