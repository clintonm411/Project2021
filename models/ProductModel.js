const mongoose = require('mongoose');

// Name,
// AgeGroup,
// Description,
// ActivityList

const ProductSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        AgeGroup: {
            type: String,
            required: true
        },
        Description: {
            type: Number,
            required: true
        },
        mediaType: {
            type: String,
            required: true
        },
        youtubeLink: {
            type: String,
            required: true
        },
        duration: {
            type: number,
            required: true
        },
        podcastLink: {
            type: String,
            required: true
        },
        ActivityList: {
            type: String,
            required: true
        }
    }
);

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;