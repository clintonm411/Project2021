const mongoose = require('mongoose');

// Name,
// AgeGroup,
// Description,
// ActivityList

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        ageGroup: {
            type: String,
            required: true
        },
        description: {
            type: Number,
            required: true
        },
        mediaType: {
            type: String,
            required: true
        },
        youtubeEmbedLink: {
            type: String,
            required: false
        },
        duration: {
            type: Number,
            required: true
        },
        mediaLink: {
            type: String,
            required: true
        },
        ActivityList: {
            type: String,
            required: false
        }
    }
);

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;