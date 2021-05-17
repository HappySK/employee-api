import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import employeeRouter from './routes/employee.js'

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/employee', employeeRouter)

const { DB_URL, PORT } = process.env;
mongoose.set('useFindAndModify', false)
mongoose.connect(
	DB_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) {
			app.listen(PORT, () => {
				console.log(`Server Started on Port : ${PORT}`);
			});
		} else console.log(err.message);
	}
);

