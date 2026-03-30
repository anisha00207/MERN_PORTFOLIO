
const Contact = require('../models/contact-model')
const Admin = require("../models/Admin-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

////////////////////////////////////
////admin login
///////////////////////////////////

const adminLogin = async (req, res) => {
  try {


    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    //console.log("ADMIN FOUND:", admin);

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      token,
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);   // 🔥 THIS IS KEY
    return res.status(500).json({ message: "Login failed" });
  }
};

////////////////////////////
/////get contacts from database
///////////////////////////

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(200).json({ msg: "no contacts are there" });
    }
    return res.status(200).json({ msg: contacts });
  }
  catch (error) {
    next(error)
  }
}

////////////////////////////////
////// delete the contact in admin panel
////////////////////////////////

const DeleteUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.json({ msg: "deleted successfully" })
  }
  catch (error) {
    res.status(500).json({ msg: "not working" })
  }

}

module.exports={adminLogin,getAllContacts,DeleteUserByID}
