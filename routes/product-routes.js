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
            ageGroup: req.body.ageGroup,
            description: req.body.description,
            activityList: req.body.activityList,
            mediaType: req.body.mediaType,
            youtubeLink: req.body.youtubeLink,
            duration: req.body.duration,
            mediaLink: req.body.mediaLink
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
)

//Find Products by Name
router.get('/findByName',
    function(req, res) {

        let nameQuery = req.query.name;

        ProductModel
        .find({ name: { get: nameQuery } })
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
)

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
)

module.exports = router;