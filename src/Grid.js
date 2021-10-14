import Card from './Card.js';

function Grid(){
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <Card
                    title="Art 1"
                    description="This is some text about the art."
                    image="./image1.jpg"
                    ></Card>
                </div>
                <div className="col">
                    <Card
                    title="Art 2"
                    description="This is some text about the art."
                    image="./image2.jpg"
                    ></Card>
                </div>
                <div className="col">
                    <Card
                    title="Art 3"
                    description="This is some text about the art."
                    image="./image3.jpg"
                    ></Card>
                </div>
            </div>
        </div>

    );
}

export default Grid;