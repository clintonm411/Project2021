import { Fragment } from "react";
import Hero from "./Hero";

function Podcast (props){
    return(
      <Fragment>
        <Hero heroName={"Podcast " + props.children.title}></Hero>
        {/* <ul>

          <li><p>Title:{props.children.title} </p></li>
          <li><p>Name:{props.children.title} </p></li>
          <li><p>Description:{props.children.title} </p></li>
          <li><p>mediaLink:{props.children.title} </p></li>
          <li><p>youtubeEmbedLink:{props.children.title} </p></li>
        </ul> */}
      </Fragment>

    );

}

export default Podcast;
