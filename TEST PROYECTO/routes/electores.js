const express = require("express");
const router = express.Router();

const electoresController = require("../controllers/ElectoresController");


//(ADMIN) CRUDS SCREENS O PANTALLAS DE MANEJO

router.get("/crud-electores", electoresController.GetCrudElectores);

///////
//GET AGREGAR////

router.get("/agregar-electores", electoresController.GetAgregarElectores);

///////
//POOOOOOOST AGREGAR////

router.post("/agregar-electores", electoresController.PostAgregarElectores);

///////
//GET LISTAAAAAAAR//////////////

router.get("/listar-electores", electoresController.GetListarElectores);

///////
//////GET EDITAR///////////////

router.get("/editar-electores", electoresController.GetEditarElectores);

///////
//////GET EDICION///////////////

router.get("/edicion-electores/:electoresId", electoresController.GetEdicionElectores);

///////
//////POST EDICION///////////////

router.post("/edicion-electores", electoresController.PostEdicionElectores);


///////
//////GET ELIMINAR/////////////

router.get("/eliminar-electores", electoresController.GetEliminarElectores);

///////
//////POST ELIMINAR/////////////

router.post("/eliminacion-electores", electoresController.PostEliminarElectores);

///////


module.exports = router;


