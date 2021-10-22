import { Fragment } from "react/cjs/react.production.min";
import PodcastView from "./PodcastView";

function PodcastUpdateScreen(){

return(
    <Fragment>

    <PodcastView fetchPath="http://localhost:3001/products/findByName" ></PodcastView>
    </Fragment>

);
}

export default PodcastUpdateScreen;