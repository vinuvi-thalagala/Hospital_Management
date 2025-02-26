import { Router } from "express";
import Patient from "../models/Patient.model.js";

const router = Router();

router.route('/add').post(async (req, res) => {

    const {name, age, gender, address} = req.body;

    const newPatient = ({
        name,
        age,
        gender,
        address
    });

    await newPatient.save().then(() => {
        console.log("Patient added successfully");
    }).catch((err) => {
        console.log(err);
    });
});

router.route('/').get(async (req, res) => {

    await Patient.find().then((patients) => {
        res.json(patients);
    }).catch((err) => {
        console.log(err);
    })
});

router.route('/update/:id').put(async (req, res) => {
    
    let userId = req.params.id;
    const {name, age,gender, address} = req.body;

    const updatePatient = {
        name,
        age,
        gender,
        address
    }

    await Patient
        .findByIdAndUpdate(userId, updatePatient)
        .then(() => {
            res.status(200).send({status : "Patient updated"});
        }).catch((err) => {
            res.status(500).send({status : "Error with updating data"})
        })
}
);

router.route('/delete/:id').delete(async (req, res) => {
    
    let userId = req.params.id;

    await Patient.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status : "Patient deleted"});
    }).catch((err) => {
        res.status(500).send({status : "Error with deleting data"});
    })
});

router.route('/get/:id').get(async (req, res) => {
    
    let userId = req.params.id;

    const patient = await Patient.findById(userId).then(() => {
        res.status(200).send({status : "Patient fetched", patient});
    }).catch((err) => {
        res.status(500).send({status : "Error with fetching data"});
    })
});

export default router;