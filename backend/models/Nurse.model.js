import mongoose from "mongoose";

const Schema = mongoose.Schema;

const nurseSchema = new Schema ({

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

    position : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Nurse = mongoose.model("Nurse", nurseSchema);

export default Nurse;