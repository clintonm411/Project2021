const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel.js')


router.get( '/productlist',
    function (req, res) {

        // Product Listing
        let products = [
            {
                'Slide': 'Vocabulary - Letter A',
                'Description': 'This is an alphabet game for letter A',
                'Activity': 'Complete the exercise 1!'
            },
            {
                'Slide': 'Vocabulary - Letter B',
                'Description': 'This is an alphabet game for letter B',
                'Activity': 'Complete the exercise 2!'
            },
            {
                'Slide': 'Vocabulary - Letter C',
                'Description': 'This is an alphabet game for letter C',
                'Activity': 'Complete the exercise 3!'
            },
            {
                'Slide': 'Vocabulary - Letter D',
                'Description': 'This is an alphabet game for letter D',
                'Activity': 'Complete the exercise 4!'
            },
            {
                'Slide': 'Vocabulary - Letter E',
                'Description': 'This is an alphabet game for letter E',
                'Activity': 'Complete the exercise 5!'
            }
        ];

        // Filter Products
        function theFilter(product) {
            if (
                product.slide === req.query.slide &&
                product.Activity <= req.query.Activity  
            ) {
                return product
            }
        }

        let filteredProducts = products.filter(theFilter);



        res.send(`
            <h1>Product List</h1>
            ` +
            filteredProducts.map(createListItem)
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