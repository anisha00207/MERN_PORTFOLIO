const Experience= require("../models/experience-model.js")


////////////////////////////////////////////////
////////to get experience on frontend
////////////////////////////////////////////////

const experience =async(req,res)=>{
try{
 const response =await Experience.find();
    if(!response){
       return res.status(404).json({msg:"no service found"})
    }
   return res.status(200).json({msg:response});
}
catch(error){
   res.status(500).send("error occurred")
}
}



const addExperience = async (req, res) => {
  try {
    const { jobRole, CompanyName, Duration } = req.body;

    if (!jobRole || !CompanyName || !Duration) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const experience = await Experience.create({
      jobRole,
      CompanyName,
      Duration,
    });

    res.status(201).json({
      message: "Experience added successfully",
      experience,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};



const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    await Experience.findByIdAndDelete(id);

    res.status(200).json({
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete experience" });
  }
};




module.exports= {experience,addExperience,deleteExperience};