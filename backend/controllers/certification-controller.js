const Certification= require("../models/certification-model.js")

///////////////////////////////////
////to get certification
//////////////////////////////////

const certification =async(req,res)=>{
try{
 const response =await Certification.find();
    if(!response){
       return res.status(404).json({msg:"no service found"})
    }
   return res.status(200).json({msg:response});
}
catch(error){
   res.status(500).send("error occurred")
}
}


const addCertification =async(req,res)=>{
try {
    const { certificateName, organizationName, Timeline } = req.body;

    if (!certificateName || !organizationName || !Timeline) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const experience = await Certification.create({
      certificateName,
  organizationName,
      Timeline,
    });

    res.status(201).json({
      message: "certification added successfully",
      experience,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}



const deleteCertification = async (req, res) => {
  try {
    const { id } = req.params;

    await Certification.findByIdAndDelete(id);

    res.status(200).json({
      message: "Certification deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete certification" });
  }
};

module.exports= {certification,addCertification,deleteCertification};
