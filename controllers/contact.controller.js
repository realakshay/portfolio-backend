const Contact = require("../models/Contact");

const addNewContact = async (req, res) =>{
    const { name, email, subject, message} = req.body;
    try{
        await Contact.create({name, email, subject, message});
        res.status(200).json({
            message: "Contact Inserted Successfully"
        })
    }catch(error){
        res.status(500).json({
            message: "Server Error"
        })
    }
}

const getAllContacts = async (req, res) =>{
    try{
        const contacts = await Contact.find({});
        res.status(200).json(contacts);
    }catch(error){
        res.status(500).json({
            message: "Server Error"
        })
    }
}

module.exports = {addNewContact, getAllContacts}