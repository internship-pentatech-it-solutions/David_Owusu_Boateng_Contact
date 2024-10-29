const express= require("express")
const Contact = require("../model/contactModel")
const mongoose = require("mongoose")


const createContact = async (req,res)=>{
    const name= req.body;

    try {
        const findUser= await Contact.findOne(name);
        if(findUser){
            return res.status(400).json("Contact already exists")
        }

        const createContact = await Contact.create(req.body)
        res.status(201).json(createContact);
    } catch(error){
        res.status(500).json("Server side error")
    }
}
const getContact=async (req,res) =>{
    const {id} = req.params
    try{
        const getaContact= await Contact.findById( id );
        res.status(200).json(getaContact)
    }catch (error){
        res.status(500).json("Server side error")
    }
};
const getAllContact=async (req,res) =>{
    try{
        const getallContact= await Contact.find().sort({createdAt:-1})
    res.status(200).json(getallContact)
    }catch (error){
        res.status(500).json("Server side error")
    }
};
const updateContact= async(req, res) =>{
    const{id}=req.params

    try{
        const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        return res.status(200).json(updateContact);
    }catch(error){
        res.status(500).json("Server side error")
    }

}
const deleteContact= async(req, res) =>{
    const{ id}=req.params
    
    try{
        const deleteContact = await Contact.findByIdAndDelete(id, {
            new: true,
        })
        return res.status(200).json(deleteContact);
    }catch(error){
        res.status(500).json("Server side error")
    }
}



module.exports={getAllContact, createContact,updateContact, deleteContact,getContact}