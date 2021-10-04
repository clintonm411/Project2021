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
        ActivityList: {
            type: String,
            required: true
        }
    }
);

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;