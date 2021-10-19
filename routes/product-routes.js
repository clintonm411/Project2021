const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel.js')

//Show all products
router.get( '/productlist',
    function(req, res) {

        ProductModel
        .find({ })
        .then(
            function(dbDocument) {
                res.send(dbDocument)
            }
        )
        .catch(
            function(mongooseError) {
                console.log(mongooseError)
                res.send("Error occured. Check again!");
            }
        )

    }
);


router.post('/create',            // http://localhost:3001/products/create
    function(req, res) {
        
        const formData = {
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            mediaLink: req.body.mediaLink,
            youtubeLink: req.body.youtubeLink
        };

        
        ProductModel
        .create(formData)
        .then(
            function(dbDocument) {
                res.send(dbDocument);
            }
        )
        .catch(
            function(mongooseError) {
                console.log(mongooseError)
                res.send("Error occured. Check again!");
            }
        )

    }
);


router.get('/find',
    function(req, res) {

        let SlideQuery = req.query.Slide;
        let ActivityQuery = req.query.Activity;

        ProductModel
        .find({ Activity: { get: ActivityQuery } })
        .then(
            function(dbDocument) {
                res.send(dbDocument)
            }
        )
        .catch(
            function(mongooseError) {
                console.log(mongooseError)
                res.send("Error occured. Check again!");
            }
        )

    }
);

//Find Products by Name
router.get('/findByName/:name',
    function(req, res) {

        // let nameQuery = req.query.name;
        let nameQuery = req.params.name;

        ProductModel
        .find({ name: nameQuery })
        .then(
            function(dbDocument) {
                res.send(dbDocument)
            }
        )
        .catch(
            function(mongooseError) {
                console.log(mongooseError)
                res.send("Error occured. Check again!");
            }
        )

    }
);

//Find Products by Age Group
router.get('/findByAgeGroup',
    function(req, res) {

        let ageGroupQuery = req.query.ageGroup;

        ProductModel
        .find({ ageGroup: { get: ageGroupQuery } })
        .then(
            function(dbDocument) {
                res.send(dbDocument)
            }
        )
        .catch(
            function(mongooseError) {
                console.log(mongooseError)
                res.send("Error occured. Check again!");
            }
        )

    }
);

router.get(
    '/get',
    function(req, res) {
        ProductModel
        .find()
        .then(
            function(dbDocuments) {
                res.json(dbDocuments)
            }  
        )
        .catch()
    }
)

module.exports = router;