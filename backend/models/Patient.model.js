import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema ({

    name : {
        type : String,
        required : true
    },

    age : {
        type : String,
        required : true
    },

    gender : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;