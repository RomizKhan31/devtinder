
// import mongoose 
const mongoose = require('mongoose');

// create a schema for the user model
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    password: {
        type: String
    }
});

// export the model using commonjs module.exports syntax
module.exports = mongoose.model('User', userSchema);
