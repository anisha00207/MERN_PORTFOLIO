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

    return res.status(200).json({
      message: "contact form submitted",
      contactuser,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

