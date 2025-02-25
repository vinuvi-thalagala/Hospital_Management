import { Router } from "express";
import Doctor from "../models/Doctor.model.js";
const router = Router();
 

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const age = req.body.age;
    const docId = Number(req.body.docId);

    const newDoctor = new Doctor({
        name,
        age,
        docId
    });

    newDoctor.save().then(() => {
        console.log("Doctor added successfully");
    }).catch((err) => {
        console.log(err);
    });

});

router.route('/').get((req, res) => {

    Doctor.find().then((doctors) => {
        res.json(doctors);
    }).catch((err) => {
        console.log(err);
    })
});

router.route('/update/:id').put(async (req, res) => {

    let userId = req.params.id;

    const {name, age, gender} = req.body;

    const updateDoctor = {
        name,
        age, 
        gender
    }

    const upadate = await Doctor.findByIdAndUpdate(userId, updateDoctor).then(() => {

        res.status(200).send({status : "Doctor updated"});
    }).catch((err) => {
        res.status(500).send({status : "Error with updating data"})
    })

});


 router.route('/delete/:id').delete(async (req, res) => {

    let userId = req.params.id;

    await Doctor.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status : "Deleted successfully"});
    }).catch((err) => {
        res.status(500).send({ststus : "Error with deleting doctor"});
    })
 });

 router.route('get/:id').get(async (req, res) => {

    let userId = req.params.id;

    const doctor = await Doctor.findById(userId).then(() => {

        res.status(200).send({ststus : "Doctor fetched", doctor})
    }).catch((err) => {
        res.status(500).send({status : "Error with fetching doctor"})
    })
 });

 export default router;