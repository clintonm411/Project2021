import { Fragment } from "react/cjs/react.production.min";
import PodcastView from "./PodcastView";

function PodcastUpdateScreen(props){

return(
    <Fragment>

    {/* <PodcastView fetchPath="http://localhost:3001/products/findByName"  ></PodcastView> */}
    <PodcastView>{props.children}</PodcastView>
    </Fragment>

);
}

export default PodcastUpdateScreen;