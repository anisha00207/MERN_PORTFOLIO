const Contact = require("../models/contact-model.js");


//////////////////////////////////////////////
////sending contact form post
//////////////////////////////////////////////
const contactform = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    const contactuser = await Contact.create({
      username,
      email,
      message,
    });
    return res.status(200).send({
      msg: "contact form submitted",
      contactuser
      //contactuser
    });
  } catch (error) {
    res.status(500).send("internal server error");
    console.log(error);
  }
};
module.exports = contactform;

