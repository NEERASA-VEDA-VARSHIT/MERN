const mongoose  = require("mongoose");

function connectDB(dbUrl) {
    return mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });
}

module.exports = {
    connectDB,
};
