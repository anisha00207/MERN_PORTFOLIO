const User = require("../models/user-model");

//const bcrypt = require("bcryptjs");

//! hi route not used
const home = async (req, res) => {
  try {
    res.status(200).send("Hi from controller ");
  } catch {
    console.log("error occured");
  }
};

//! register route to create a user entry in database
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userexists = await User.findOne({ email });
    if (userexists) {
      return res.status(400).send({ message: "user already exists" });
    }
    const userr = await User.create({
      username,
      email,
      phone,
      password,
    });
//!generate token 
    return res.status(200).send({
      msg: "user created",
      token: await userr.generateToken(),
      userID: userr._id.toString(),
    });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
    console.error(error);
  }
};

//! login route to check if the user email exists in database

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailexists = await User.findOne({ email });


    if (emailexists) {
      const passcompare = await emailexists.comparePassword(password);//if email exists compare password 
      //   bcrypt.compare(password, emailexists.password);
      if (passcompare) {
        return res.send({
          msg: "user created",
          token: await emailexists.generateToken(),
          userID: emailexists._id.toString(),
        });
      }
       return res.status(400).send({ message: "invalid credentials" });
    } else {
      
      
       return res.status(400).send({ message: "user does'nt exists prefer registering first"});
    }
  } catch (error) {
    res.status(500).send("internal server error");
    console.error(error);
  }
};

//! user route to get details in frontend from database

const user = async (req, res) => {
  try {
    const userData = req.user;
    
    res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };