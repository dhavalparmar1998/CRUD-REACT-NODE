import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const crudSchema = new Schema({
  name:String,
  age:Number,
  place:String
});

const crudModel = mongoose.model('cruds', crudSchema);
export default crudModel;