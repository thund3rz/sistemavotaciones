const express = require("express");
const router = express.Router();

const partidosController = require("../controllers/PartidosController");

//(ADMIN) CRUDS SCREENS O PANTALLAS DE MANEJO

router.get("/crud-partidos", partidosController.GetCrudPartidos);

///////
//GET AGREGAR////

router.get("/agregar-partidos", partidosController.GetAgregarPartidos);


///////
//POOOOOOOST AGREGAR////

router.post("/agregar-partidos", partidosController.PostAgregarPartidos);

///////
//GET LISTAAAAAAAR//////////////

router.get("/listar-partidos", partidosController.GetListarPartidos);

///////
//////GET EDITAR///////////////

router.get("/editar-partidos", partidosController.GetEditarPartidos);

///////
//////GET EDICION///////////////

router.get("/edicion-partidos/:partidosId", partidosController.GetEdicionPartidos);

///////
//////POST EDICION///////////////

router.post("/edicion-partidos", partidosController.PostEdicionPartidos);

///////
//////GET ELIMINAR/////////////

router.get("/eliminar-partidos", partidosController.GetEliminarPartidos);

///////
//////POST ELIMINAR/////////////

router.post("/eliminacion-partidos", partidosController.PostEliminarPartidos);

///////







module.exports = router;


