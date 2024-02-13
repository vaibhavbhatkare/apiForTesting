const express = require("express")
const router = express.Router();
const {checkLinks}= require("../models/linkCheck")
const {checkImg}=require("../models/imageCheck")
const{ checkLoadTime}=require("../models/checkLoad")
const{checkPerformance}=require("../models/performanceController")
const{login}=require("../models/checkLogin")


router.get("/linkCheck",checkLinks);
router.get("/images",checkImg);
router.get("/load",checkLoadTime);
router.get("/perform",checkPerformance);
router.get("/login",login);


module.exports = router;