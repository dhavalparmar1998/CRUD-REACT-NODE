import express from 'express';
import { addRecord, deleteRecord, showRecord, showRecordById, updateRecord } from '../controllers/crudController.js';
const crudRoute = express.Router();

crudRoute
.get("/" , showRecord)
.get("/:userid" , showRecordById)
.post("/" , addRecord)
.delete("/:userid" , deleteRecord)
.put("/:userid" , updateRecord)

export default crudRoute;