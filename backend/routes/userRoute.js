const express = require("express")
const mongoose = require("mongoose")
const userModel = require("../models/userModel");



const router = express.Router()
router.use(express.json())

router.post("/",async(req,res)=>{
    const {name,email,age} = req.body;
    try{
    const userAdded =  new userModel({
        name:name,
        email:email,
        age:age
    });

    await userAdded.save()
    res.status(201).json(userAdded)
}
catch(error){
    console.log(error);
    res.status(500).json({error:error.message})
    
}
})

router.get("/",async(req,res)=>{
    try{

        const user =await userModel.find({});
        res.status(200).json(user);
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:err.message});
        
    }
});

router.get("/:id",async(req,res)=>{
    const {id} = req.params
    try{

        const singleuser =await userModel.findById({_id:id})
        res.status(200).json(singleuser)
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:err.message})
        
    }
});

router.delete("/:id",async(req,res)=>{
    const {id} = req.params
    try{

        const singleuser =await userModel.findByIdAndDelete({_id:id})
        res.status(200).json(singleuser)
    
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.message})
        
    }
});

router.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body;
    try{

        const updateuser =await userModel.findByIdAndUpdate(id,req.body,{
            new:true
            
        })
        res.status(200).json(updateuser)
    
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.message})
        
    }
});

module.exports = router;
