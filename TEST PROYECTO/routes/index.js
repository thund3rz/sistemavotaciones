const express = require("express");
const router = express.Router();

const indexController = require("../controllers/IndexController");


router.get("/",indexController.GetIndex); //ELEMENTO MIN 24:38 1ra parte



module.exports = router;
