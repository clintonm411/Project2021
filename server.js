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