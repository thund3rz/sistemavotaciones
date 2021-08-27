const express = require("express");
const router = express.Router();

const eleccionesController = require("../controllers/EleccionesController");

//(ADMIN) CRUDS SCREENS O PANTALLAS DE MANEJO

router.get("/crud-elecciones", eleccionesController.GetCrudElecciones);

///////
//GET AGREGAR////

router.get("/agregar-elecciones", eleccionesController.GetAgregarElecciones);

///////
//POOOOOOOST AGREGAR////

router.post("/agregar-elecciones", eleccionesController.PostAgregarElecciones);

///////
//GET LISTAAAAAAAR//////////////

router.get("/listar-elecciones", eleccionesController.GetListarElecciones);

///////
//////GET EDITAR///////////////

router.get("/editar-elecciones", eleccionesController.GetEditarElecciones);

///////
//////GET EDICION///////////////

router.get("/edicion-elecciones/:eleccionesId", eleccionesController.GetEdicionElecciones);

///////
//////POST EDICION///////////////

router.post("/edicion-elecciones", eleccionesController.PostEdicionElecciones);


///////
//////GET ELIMINAR/////////////

router.get("/eliminar-elecciones", eleccionesController.GetEliminarElecciones);

///////
//////POST ELIMINAR/////////////

router.post("/eliminacion-elecciones", eleccionesController.PostEliminarElecciones);

///////



module.exports = router;


