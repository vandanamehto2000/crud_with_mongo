const mongoose = require("mongoose");
const db = () => {
    mongoose.connect(
        "mongodb://localhost:27017/students"
    )
    .then(data => {
        console.log("connected to the database");
    })
    .catch(err => {
        console.log("cannot connected to the database",err)
    })
}

module.exports = db;