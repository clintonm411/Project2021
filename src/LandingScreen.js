import logo from './logo.svg';

import Hero from './Hero.js';
import Card from './Card.js';

function LandingScreen() {
  return (
    <div>
      
      <Hero 
      heroImage="./logo-anim-2.png" 
      description="A childrens' podcast web app which allows parents to register and access a secure area featuring an educational and entertaining ABC story series for kids ages 2-4.
                                You're welcome to the world of fun learning adventures!" 
      heroName="Podcasts"></Hero>
      <div id="feature1" class="container px-4 py-5"    id="custom-cards">
        <h2 class="pb-2 border-bottom">Episodes</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col" card>
            <Card
            title="Jojo's daydreams series (Letter A)"
            description="Jojo would like to become a famous astronaut when he grows up. Learn letter A words with Jojo."
            image="./image1.jpg"
            podcast=""
            youtubeEmbedLink="https://www.youtube.com/embed/poKCV9EskGg?start=9"
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Jojo's daydreams series (Letter B)"
            description="Jojo is taking a nap on the carpet, out of nowhere he spots a bee. Learn letter B word with Jojo."
            image="./image2.jpg"
            podcast="https://res.cloudinary.com/dxfkzwedw/video/upload/v1634479610/Jojo_s_daydreams_series_-_Short_story_for_kids_-_the_Letter_A_sound_-_Storytime_Haven_o3tzem.mp3"
            youtubeEmbedLink="https://www.youtube.com/embed/ags1UyuD5C0?start=9"
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Jojo's daydreams series (Letter C)"
            description="Care for some carrot cake? Jojo is day dreaming about cake. Let's practice the letter C sound with Jojo."
            image="./image3.jpg"
            podcast=""
            youtubeEmbedLink="https://www.youtube.com/embed/elVNZ0nutRE?start=9"
            ></Card>
          </div>
          <div className="col" card>
            <Card
            title="Jojo's daydreams series (Letter D)"
            description="Jojo is at the park and he wishes he had a dog. Find out what letter D words Jojo is practicing at the park."
            image="./image2.jpg"
            podcast=""
            youtubeEmbedLink="https://www.youtube.com/embed/fcDn_7-bwdU?start=9"
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Jojo's daydreams series (Letter E)"
            description="Jojo loves to read. He is reading about elephants. Join Jojo as he discovers a few words that start with the letter E."
            image="./image3.jpg"
            podcast=""
            youtubeEmbedLink="https://www.youtube.com/embed/3LZwKqJpypw?start=9"
            ></Card>
          </div>
          <div className="col">
            <Card
            title="Jojo's daydreams series (Letter F)"
            description="Jojo and his family are off to the farm. Join Jojo and Hetty as they practice the letter F sound."            
            image="./image1.jpg"
            podcast=""
            // youtubeLink="https://www.youtube.com/embed/thAm20mgqmY?start=9"
            ></Card>
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default LandingScreen;
