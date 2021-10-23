import { Fragment } from "react";
import Hero from "./Hero";
import ViewPodcasts from "./ViewPodcasts";

function ProductsScreen (){
    return(
        <Fragment>
            {/* <Hero heroImage="./logo-anim-2.png" heroName="Podcasts"></Hero> */}

            <ViewPodcasts></ViewPodcasts>
        </Fragment>
        

        
    );
}

export default ProductsScreen;