const express = require("express");
const router = express.Router();

const adminsController = require("../controllers/AdminsController");

///GET LOGIN

router.get("/login", adminsController.GetLogin);

///////
///GET PANEL

router.get("/panel", adminsController.GetPanel);

///////
///GET AGREGAR

router.get("/agregar-admins", adminsController.GetAgregarAdmins);


///POST AGREGAR

router.post("/agregar-admins", adminsController.PostAgregarAdmins);

////////
///POST SET SESSION

router.post("/postsetsession", adminsController.PostSetSession);

////////
///POST LOGOUT

router.post("/logout", adminsController.PostLogOut);

////////
///POST SET COOKIE

router.post("/postsetcookie", adminsController.PostSetCookie);

///////
module.exports = router;


