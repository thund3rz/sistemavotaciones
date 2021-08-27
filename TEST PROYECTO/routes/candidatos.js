const express = require("express");
const router = express.Router();

const candidatosController = require("../controllers/CandidatosController");


//(ADMIN) CRUDS SCREENS O PANTALLAS DE MANEJO

router.get("/crud-candidatos", candidatosController.GetCrudCandidatos);

///////
//GET AGREGAR////

router.get("/agregar-candidatos", candidatosController.GetAgregarCandidatos);

///////
//POOOOOOOST AGREGAR////

router.post("/agregar-candidatos", candidatosController.PostAgregarCandidatos);

///////
//GET LISTAAAAAAAR//////////////

router.get("/listar-candidatos", candidatosController.GetListarCandidatos);

///////
//////GET EDITAR///////////////

router.get("/editar-candidatos", candidatosController.GetEditarCandidatos);

///////
//////GET EDICION///////////////

router.get("/edicion-candidatos/:candidatosId", candidatosController.GetEdicionCandidatos);
///////
//////POST EDICION///////////////

router.post("/edicion-candidatos", candidatosController.PostEdicionCandidatos);

///////
//////GET ELIMINAR/////////////

router.get("/eliminar-candidatos", candidatosController.GetEliminarCandidatos);

///////
//////POST ELIMINAR/////////////

router.post("/eliminacion-candidatos", candidatosController.PostEliminarCandidatos);

///////



module.exports = router;


