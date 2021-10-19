const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        mediaLink: {
            type: String,
            required: false
        },
        youtubeEmbedLink: {
            type: String,
            required: false
        }
        
    }
);

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;