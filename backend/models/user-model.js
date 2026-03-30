// const mongoose =require('mongoose')
// const bcrypt=require("bcryptjs")
// const jwt=require("jsonwebtoken")
// const userSchema=new mongoose.Schema({
//     username:{
//          type:String,
//          required:true,
//     },
//     email:{
//          type:String,
//          required:true,
//     },
//     phone:{
//          type:String,
//          required:true,
//     },
//     password:{
//          type:String,
//          required:true,
//     },
//    isAdmin:{
//          type:Boolean,
//          require:true,
//          default:false,
//     },
// });


// userSchema.pre('save', async function () {
//     const user = this;

//     // If password not modified, do nothing
//     if (!user.isModified("password")) {
//         return;
//     }

//     const saltRound = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, saltRound);
// });

// //compare the password
// userSchema.methods.comparePassword = async function(password){
// return bcrypt.compare(password,this.password)
// }

// userSchema.methods.generateToken=async function(){
// try{
// return jwt.sign({
//      userId:this._id.toString(),
//      email:this.email,
//      isAdmin: this.isAdmin,
     
// },process.env.JWT_SECRET_KEY,{
//      expiresIn:"20d",
// });
// }
// catch(error){
//      console.error(error)
// }
// }

// const User=new mongoose.model("User",userSchema)

// module.exports=User 