const testimonialModel=require('../models/testimonial-model')
const  testimonial=async(req,res)=>{
try{
 const response =await testimonialModel.find();
    if(!response){
       return res.status(404).json({msg:"no service found"})
    }
   return res.status(200).json({msg:response});
}
catch(error){
   res.status(500).send("error occurred")
}
}
module.exports=testimonial;


