const express = require("express");
const router = express.Router();

const puestosController = require("../controllers/PuestosController");

//(ADMIN) CRUDS SCREENS O PANTALLAS DE MANEJO

router.get("/crud-puestos", puestosController.GetCrudPuestos);

///////
//GET AGREGAR////

router.get("/agregar-puestos", puestosController.GetAgregarPuestos);


///////
//POOOOOOOST AGREGAR////

router.post("/agregar-puestos", puestosController.PostAgregarPuestos);

///////
//GET LISTAAAAAAAR//////////////

router.get("/listar-puestos", puestosController.GetListarPuestos);

///////
//////GET EDITAR///////////////

router.get("/editar-puestos", puestosController.GetEditarPuestos);

///////
//////GET EDICION///////////////

router.get("/edicion-puestos/:puestosId", puestosController.GetEdicionPuestos);

///////
//////POST EDICION///////////////

router.post("/edicion-puestos", puestosController.PostEdicionPuestos);

///////
//////GET ELIMINAR/////////////

router.get("/eliminar-puestos", puestosController.GetEliminarPuestos);

///////
//////POST ELIMINAR/////////////

router.post("/eliminacion-puestos", puestosController.PostEliminarPuestos);

///////







module.exports = router;


