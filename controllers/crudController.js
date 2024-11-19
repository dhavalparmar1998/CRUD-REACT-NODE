import crudModel from "../models/crudModel.js"

const addRecord = async(req,res)=>{
    try{
        var instance = new crudModel(req.body);
        var dbData = await instance.save();
        res.status(200).send({data:null , message:'User Added successfully'})
    }
    catch(err){
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Saved'});
    }
}
const showRecord = async(req,res)=>{
    try{
        var dbData = await crudModel.find();
        res.status(200).send({data:dbData})
    }
    catch(err){
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}
const showRecordById = async(req,res)=>{
    console.log(req.params.userid);
    
    try{
        var dbData = await crudModel.findById(req.params.userid);
        res.status(200).send({data:dbData})
    }
    catch(err){
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}
const deleteRecord = async(req,res)=>{
    // console.log("DELETE CALLED");
    // console.log(req.params.userid);
    try{
        var dbData = await crudModel.findByIdAndDelete(req.params.userid);
        res.status(200).send({data:null , status:true, message:'User Deleted successfully'})
    }
    catch(err){
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}
const updateRecord = async(req,res)=>{
    //  console.log(req.params.userid);
    try{
        var dbData = await crudModel.findByIdAndUpdate(req.params.userid , req.body);
        res.status(200).send({data:null , status:true, message:'User Updated successfully'})
    }
    catch(err){
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}

export {
    addRecord,
    showRecord,
    deleteRecord,
    updateRecord,
    showRecordById
}