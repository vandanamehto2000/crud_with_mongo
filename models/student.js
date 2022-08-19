const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type:String,
        require:true
    },
    age: {
        type:Number,
        require:true
    },
    class: {
        type:String,
        require:true
    }
},
{timestamps:true}
)

const studentDetails = new mongoose.model("studentDetails", studentSchema);
module.exports = studentDetails;