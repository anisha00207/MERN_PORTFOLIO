require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors')


//!cors 
var corsOptions = {
  origin: "https://mern-portfolio-frontend-34wb.onrender.com",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
}

//! middlewares
app.use(cors(corsOptions))
app.use(express.json());
//const authrouter = require("./router/auth-router.js");
const contactrouter=require("./router/contact-router.js");
const connectDb = require("./utils/db.js");
const error_middleware = require("./middleware/error-middleware.js");
const projectrouter=require("./router/project-router.js")
const testimonialrouter =require("./router/testimonial-router.js")
const technologyrouter=require("./router/technology-router.js")
const certificationrouter =require("./router/certification-router.js")
const experiencerouter=require("./router/experience-router.js")
const adminRouter=require("./router/admin-router.js")
const profileView=require("./router/profileViews-router")
//!router
//app.use("/api/auth", authrouter);
app.use("/api/form",contactrouter)
app.use("/api/data",projectrouter)
app.use("/api/review",testimonialrouter)
app.use("/api/skills",technologyrouter)
app.use("/api/user_data",experiencerouter)
app.use("/api/cert",certificationrouter)
app.use("/api/stats", profileView);
app.use(error_middleware)
//Admin routes 
app.use("/api/admin",adminRouter)


const PORT = process.env.PORT || 3002;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


