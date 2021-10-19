// Import the express function
const express = require('express'); 
const mongoose = require('mongoose');
//CORS - Cross Origin Scripting
const cors = require("cors");
//dontenv for reading enviroment variables
require('dotenv').config();
// express() returns an object with all kinds
// of methods for handling HTTP requests
const server = express();

// Import the user routes
const userRoutes = require('./routes/user-routes.js');
// Import the user routes
const productRoutes = require('./routes/product-routes.js');

// Connect to MongoDB using mongoose
const connectionString = process.env.MONGODB_CONNECTION_STRING;

const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
.connect(connectionString, connectionConfig)
.then(
    function() {
        console.log("DB is connected");
    }
)
.catch(
    function(dbError) {
        console.log("error occured", dbError)
    }
);




// Configuration
//Configure for POST request
server.use( express.urlencoded({ extended: false }) );
//Configure for JSON request
server.use( express.json() );
//Configure for CORS request
server.use( cors() );
//Configure for routes
server.use('/users',userRoutes)
server.use('/products',productRoutes)


// A GET route
server.get(
    '/', // document
    function (req, res) { //callback function
        res.send("<h1>Welcome Home</h1>");
    }
);

server.get(
    '/blog/:year/:month/:day/:title',
    function(req, res) {

        let year = req.params.year;
        let month = req.params.month;
        let day = req.params.day;
        let title = req.params.title;

        res.send(
            `
                <h1>Blog</h1>
                <p>Date: ${day}/${month}/${year}</p>
                <h2>${title}</h2>
            `
        );
    }
);

server.get(
    '/:title',
    function(req, res) {

        // let year = req.params.year;
        // let month = req.params.month;
        // let day = req.params.day;
        let title = req.params.title;

        res.send(
            `
                <h1>${title}</h1>
                
                <h2>${title}</h2>
            `
        );
    }
);

server.listen(
    process.env.PORT || 3001,
    function() {
        console.log('Server running on http://localhost:3001/')
    }
);