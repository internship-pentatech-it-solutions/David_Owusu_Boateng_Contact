const express = require("express")
const router = express.Router();

const {getContact,getAllContact, createContact, updateContact, deleteContact}=require('../controller/contactController')

//create a contact
router.post("/",createContact)
//get all contact
router.get("/", getAllContact);
//get a contact
router.get("/:id", getContact);
//update a contact
router.put("/:id",updateContact)
//delete a contact
router.delete("/:id",deleteContact)

module.exports = router;