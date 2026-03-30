const express = require("express");
const router = express.Router();
const { incrementProfileViews } = require("../controllers/profileViews-controller");

router.get("/profile-views", incrementProfileViews); //to get profileviews at frontend

module.exports = router;