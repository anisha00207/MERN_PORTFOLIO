const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth-controller");
const schemas=require("../validators/auth-validator") 
const validate=require("../middlewares/validate_middleware")
const authMiddleware=require("../middlewares/auth_middleware")
router.route("/").get(auth.home);
router.route("/register").post(validate(schemas.signupschema),auth.register);
router.route("/login").post(validate(schemas.loginschema),auth.login);
router.route("/user").get(authMiddleware, auth.user);
module.exports = router;