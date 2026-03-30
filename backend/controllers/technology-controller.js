const Technology = require("../models/technology-model.js")

///////////////////
/////to get technology on homepage
///////////////////

const technology =async(req,res)=>{
try{
 const response =await Technology.find();
    if(!response){
       return res.status(404).json({msg:"no service found"})
    }
   return res.status(200).json({msg:response});
}
catch(error){
   res.status(500).send("error occurred")
}
}




const addTechnolgy =async(req,res)=>{
try {
    const { technologyName, progress} = req.body;

    if (!technologyName|| !progress ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const experience = await Technology.create({
    technologyName, 
    progress
    });

    res.status(201).json({
      message: "technology added successfully",
      experience,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}


const deleteTechnology = async (req, res) => {
  try {
    const { id } = req.params;

    await Technology.findByIdAndDelete(id);

    res.status(200).json({
      message: "Technology deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete technology",
    });
  }
};

module.exports= {technology,addTechnolgy,deleteTechnology};



