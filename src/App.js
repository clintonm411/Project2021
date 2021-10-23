import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutRoute from './LayoutRoute.js';
import LandingScreen from './LandingScreen.js';
import AboutScreen from './AboutScreen.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';
import PodcastsScreen from './PodcastsScreen.js';
import ListingScreen from './ListingScreen.js';
import AddPodcast from './AddPodcast.js';
import Podcast from './Podcast.js';
import ProfileScreen from './ProfileScreen.js'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={LandingScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                <LayoutRoute path="/podcasts" exact={true} component={PodcastsScreen} />
                <LayoutRoute path="/listing" exact={true} component={ListingScreen} />
                <LayoutRoute path="/addpodcast" exact={true} component={AddPodcast} />
                <LayoutRoute path="/podcast" exact={true} component={Podcast} />
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
                {/* 
                <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                <LayoutRoute path="/products" exact={true} component={ProductsScreen} />
                 */}
            </Switch>
        </BrowserRouter>
    )
};

export default App;