import { Fragment, useEffect, useState } from 'react';
import Card from './Card.js';

function Podcast(props) {

    // https://jsonplaceholder.typicode.com/todos/
    // https://jsonplaceholder.typicode.com/posts/1/comments
    // https://jsonplaceholder.typicode.com/albums/1/photos
    //http://localhost:3001/users/get`


    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [nextPost, setNextPost] = useState(1);

    useEffect(
        function() {

            setLoading(true);

            let fetchPath=`${process.env.REACT_APP_BACKEND_URL}/products/get`

            // Make a GET request
            fetch(fetchPath)
            // Convert String to JSON
            .then(
                function(backendResponse) {
                    // .json() converts String to JSON
                    return backendResponse.json()
                }
            )
            // Put JSON into items state
            .then(
                function(json) {
                    const moreItems = [...items, ...json]
                    setItems(moreItems);
                    setLoading(false);
                }
            )
            // If something wrong handle here
            .catch(
                function() {
                    alert("Something went wrong. Please try again.")
                }
            )
        },
        [ nextPost ]
    )

    function createItem(obj) {
        //if (!obj.avatar) return;
        return (
                <div className="container py-5" style={{maxWidth: 600, minHeight: "calc(100vh - 112px)"}}>
                    <h1>My Profile</h1>
                    <div>
                        <ul>
                            <li>{obj.title}</li>
                            <li>{obj.name}</li>
                            <li>{obj.description}</li>
                            <li>{obj.mediaLink}</li>
                            <li>{obj.youtubeEmbedLink}</li>
                        </ul>
                    </div>
                </div>  
        )
    }

    function onLoadMore() {
        setNextPost(nextPost + 1);
    }

    return (
        <Fragment>
            <div className="container" style={{minHeight: 'calc(100vh - 560px)'}}>
                <h1 className="my-5">Podcast</h1>
                <a href="/AddPodcast">
                    <button class="btn btn-primary">Add Podcast</button>
                </a>
                <div id="feature1" class="container px-4 py-5"    id="custom-cards">
                {/* <h2 class="pb-2 border-bottom">Episodes</h2> */}
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        { items.map(createItem) }   
                    </div>
                </div>

                { loading === true && <div className="loader"></div>  }

                {/* <button onClick={onLoadMore} className="btn btn-primary">Load More</button> */}
            </div>
        </Fragment>
    )
}

export default Podcast;