import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({

    name : {
        type : String,
        required : true
    },

    age : {
        type :Number,
        required : true
    },

    gender : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Doctor = mongoose.model("Dpctor", doctorSchema);

export default Doctor;