///////////////////////
///////to validate weather the data goes as per schema
///////////////////////


const validate = (Schema) => async (req, res, next) => {
  try {
    const parsebody = await Schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const msg = JSON.parse(err.message);
    //  res.status(400).json({mesg : msg[0].message})
    const extraDetails =  msg[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };

    // const message= error.Zoderror[0].message
    next(error);
  }
};
module.exports = validate;
