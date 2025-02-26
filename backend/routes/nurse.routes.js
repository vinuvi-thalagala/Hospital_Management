import { Router } from "express";
import Nurse from "../models/Nurse.model.js";

const router = Router();

router.route('/add').post(async (req, res) => {

    const {name, age, gender, position} = req.body;

    const newNurse = ({
        name,
        age,
        gender,
        position
    });

    await newNurse.save().then(() => {
        res.status(200).send({status : "Nurse added successfully"});
    }).catch((err) => {
        res.status(500).send({status : "Error with adding nurse"});
    })
});

router.route('/').get(async (req, res) => {
    await Nurse.find().then((nurses) => {
        res.json(nurses);
    }).catch((err) => {
        res.json(err);
    })
});


router.route('/update/:id').put(async (req, res) => {

    let nurseId = req.params.id;

    const {namme, age, gender, position} = req.body;

    const updateNurse = ({
        name,
        age,
        gender,
        position
    });

   const update =  await Nurse.findByIdAndUpadate(nurseId, updateNurse).then(() => {
        res.status(200).send({message : "Nurse updated successfully"}, update);
    }).catch((err) => {
        res.status(500).send({message : "Error with updating nurse", err});
    })
});

router.route('/delete/:id').delete(async (req, res) => {

    let nurseId = req.params.id;

    await Nurse.findByIdAndDelete(nurseId).then(() => {
        res.status(200).send({message : "Nurse deleted successfully"});
    }).catch((err => {
        res.status(500).send({message : "Error with deleting nurse", err});
    }))
});


router.route('/get/:id').get(async (req, res) => {
    let nurseId = req.params.id;

    const nurse = await Nurse.findById(nurseId).then(() => {
        res.status(200).send({message :"Nurse fetched", nurse});
    }).catch((err) => {
        res.status(500).send({message : "Error with fetching nurse", err});
    })
});

export default router;