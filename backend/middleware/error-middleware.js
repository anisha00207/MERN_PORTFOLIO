const error_middleware=(err,req,res,next)=>{
const status=err.status || 500;
const message = err.message || "backend error";
const  extraDetails =err.extraDetails ||"error from backend";
return res.status(status).send({message,  extraDetails });
}
module.exports=error_middleware