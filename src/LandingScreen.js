import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Hero from './Hero.js';
import Card from './Card.js';
import Footer from './Footer.js';

function LandingScreen() {
  return (
    <div>
      <Hero heroImage="./logo-anim-2.png" heroName="Podcasts"></Hero>

      <div id="feature1" class="container px-4 py-5"    id="custom-cards">
        <h2 class="pb-2 border-bottom">Episodes</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col" card>
            <Card
            title="Art 1"
            description="This is some text about the art."
            image="./image1.jpg"
            youtubeLink="https://www.youtube.com/embed/BK64WNo10iU?start=9"
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Art 2"
            description="This is some text about the art."
            image="./image2.jpg"
            youtubeLink=""
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Art 3"
            description="This is some text about the art."
            image="./image3.jpg"
            youtubeLink=""
            ></Card>
          </div>
          <div className="col" card>
            <Card
            title="Art 1"
            description="This is some text about the art."
            image="./image2.jpg"
            youtubeLink=""
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Art 2"
            description="This is some text about the art."
            image="./image3.jpg"
            youtubeLink=""
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Art 3"
            description="This is some text about the art."
            image="./image1.jpg"
            youtubeLink=""
            ></Card>
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default LandingScreen;
