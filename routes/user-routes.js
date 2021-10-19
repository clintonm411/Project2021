const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const cloudinary = require('cloudinary').v2;
const UserModel = require('../models/UserModel.js');
const { response } = require('express');

router.post(
    '/create',            // http://localhost:3001/users/create
    function(req, res) {
        

        const formData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        };

        // 1. Check if email is unique
        UserModel
        .findOne({ email: formData.email })
        .then(
            async function(dbDocument) {
                // 2. If email exists, reject the request
                if( dbDocument ) {
                    res.send("Sorry, an account with that email address already exists.");
                    console.log("email address already exists.");
                }

                // 3. If email does not exist, 
                else {
                    // If avatar file is included
                    if( Object.values(req.files).length > 0 ) {
                        const filePath = Object.values(req.files)[0].path;
                        // Upload their picture (if provided)
                        await cloudinary.uploader.upload(
                            filePath,
                            function (cloudinaryErr, cloudinaryResult) {
                                if(cloudinaryErr) {
                                    console.log(cloudinaryErr);
                                    res.json({message: "Error uploading image."});
                                } else {
                                    formData.avatar = cloudinaryResult.url;
                                    console.log("Image uploaded");
                                }
                            }
                        );
                    }

                    // 4.1. Generate the salt
                    bcryptjs.genSalt(
                        function(err, theSalt) {
                            
                            // 4.2. With the salt and password, hash the password
                            bcryptjs.hash(
                                formData.password,
                                theSalt,
                                function(err, theHash) {
                                    // 5. Reassign the original password with the hash
                                    formData.password = theHash;

                                    // 6. Save document to the database
                                    UserModel
                                    .create(formData)
                                    .then(
                                        function(dbDocument) {
                                            res.json(dbDocument);
                                        }
                                    )
                                    .catch(
                                        function(mongooseError) {
                                            console.log(mongooseError)
                                            res.send("Error occured. Check the shell.");
                                        }
                                    )
                                }
                            );
                        }
                    );
                }
            }
        )
        .catch(
            function(mongooseError) {
                console.log(mongooseError);
                res.send(mongooseError);
            }
        )
    
    }
);


router.post(
    '/find', 
    function(req, res) {
        UserModel
        .findOne({ email: req.body.email })
        .then(
            function(dbDocument) {
                if (dbDocument) {
                    res.send(dbDocument);
                } else {
                    res.send(dbDocument);
                }
            }
        )
        .catch()
    }
)

router.get(
    '/get',
    function(req, res) {
        UserModel
        .find()
        .then(
            function(dbDocuments) {
                res.json(dbDocuments)
            }  
        )
        .catch()
    }
)

router.post(
    '/logoff',
    function(req, res) {
        // UserModel
        // .find()
        // .then(
        //     function(dbDocuments) {
        //         res.json(dbDocuments)
        //     }  
        // )
        // .catch()
    }
)

router.get(
    '/profile',
    function(req, res) {
        // UserModel
        // .find()
        // .then(
        //     function(dbDocuments) {
        //         res.json(dbDocuments)
        //     }  
        // )
        // .catch()
    }
)

module.exports = router;
