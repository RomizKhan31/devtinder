const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://2002romiz_db_user:8EZ1jUgZaeVKrLYP@learnmongodb.n6bwbec.mongodb.net/devtinder"
    );
};

module.exports = connectDB;