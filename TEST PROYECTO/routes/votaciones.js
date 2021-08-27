const express = require("express");
const router = express.Router();

const votacionesController = require("../controllers/VotacionesController");

router.post("/elegir-puesto", votacionesController.PostElegirPuesto);

router.post("/elegir-puesto2", votacionesController.PostElegirPuesto2);

router.get("/seleccion-candidatos/:puestosId", votacionesController.GetSeleccionCandidatos);

router.get("/elegir-presidente", votacionesController.GetElegirPresidente);

router.get("/elegir-alcade", votacionesController.GetElegirAlcade);

router.get("/elegir-senador", votacionesController.GetElegirSenador);

router.get("/elegir-diputado", votacionesController.GetElegirDiputado);

module.exports = router;