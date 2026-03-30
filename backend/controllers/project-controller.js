const Project=require('../models/project-model.js')

/////////////////////////////////
///////to get projects
/////////////////////////////////

const  project=async(req,res)=>{
try{
 const response =await Project.find();
    if(!response){
       return res.status(404).json({msg:"no service found"})
    }
   return res.status(200).json({msg:response});
}
catch(error){
   res.status(500).send("error occurred")
}
}


const addProjects=async(req,res)=>{
try {
    const {ProjectName, TechStack, Description, Duration, Keywords, Link, ImageURL} = req.body;

    if (!ProjectName|| !TechStack || !Description|| !Keywords || !Duration || !Link || !ImageURL) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    

let parsedKeywords = [];

    if (Array.isArray(Keywords)) {
      parsedKeywords = Keywords.map(k => k.trim()).filter(Boolean);
    } else if (typeof Keywords === "string") {
      parsedKeywords = Keywords
        .split(",")
        .map(k => k.trim())
        .filter(Boolean);
    }



    const response = await Project.create({
    ProjectName, TechStack, Description, Duration,Keywords: parsedKeywords, Link, ImageURL
    });

    res.status(201).json({
      message: "projects added successfully",
      response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}



const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await Project.findByIdAndDelete(id);

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete project" });
  }
};



module.exports={project,addProjects,deleteProject};
