// Import mongoose
const mongoose = require('mongoose');

// Create the Schema
const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        subcribed: {
            type: Boolean,
            required: true
        },
        loggedIn: {
            type: Boolean,
            required: true
        }
    }
)

// Create the Model
const UserModel = mongoose.model("users", UserSchema);

// Export the Model
module.exports = UserModel;