import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import doctorRouter from './routes/doctor.routes.js';
import nurseRouter from './routes/nurse.routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

app.use('/doctor', doctorRouter);
app.use('/nurse', nurseRouter);

connection.once("open", ()=> {
    console.log("Mongo db connection is successfull");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

