import { Fragment } from "react";
import Hero from "./Hero";
import PodcastView from "./PodcastView";

function ProductsScreen (){
    return(
        <Fragment>
            {/* <Hero heroImage="./logo-anim-2.png" heroName="Podcasts"></Hero> */}

            <PodcastView></PodcastView>
        </Fragment>
        

        
    );
}

export default ProductsScreen;