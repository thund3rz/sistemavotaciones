//exportacion modelos

const Electores = require("../models/Electores");
const Puestos = require("../models/Puestos");
const Candidatos = require("../models/Candidatos");
const Elecciones = require("../models/Elecciones");
/////

//GET ELEGIR PUESTO
exports.PostElegirPuesto = (req,res,next) => {  

    
    const cedula = req.body.Cedula;
    
    Electores.findOne({where: {cedula: cedula}}).then((elector) => {

        
        
        if(!elector){

            //error cedula no existe
            res.redirect("/");


        }


        const votante = elector.dataValues;


        switch(elector.estado){

            case "true":

                estadovotante = 1;

    
                console.log("valor xd:" + estadovotante);
    
                res.render("votaciones/elegirpuesto/elegir-puesto",{votante: votante, estadovotante: estadovotante > 0});

            break;

            case "false":


                estadovotante = -1;

                console.log("valor:" + estadovotante);
                
        
                res.render("votaciones/elegirpuesto/elegir-puesto",{votante: votante, estadovotante: estadovotante > 0});

            break;

        };



        // PRUEBAAAAAAAAAAAAAAA
        /* if(elector.estado){
            console.log("wtf:" + elector.estado);
            
            estadovotante = 1;

            const votante = elector.dataValues;

            console.log("valor xd:" + estadovotante);

            res.render("votaciones/elegirpuesto/elegir-puesto",{votante: votante, estadovotante: estadovotante > 0});
        }else{
            estadovotante = -1;

            console.log("valor:" + estadovotante);
    
            const votante = elector.dataValues;
    
            res.render("votaciones/elegirpuesto/elegir-puesto",{votante: votante, estadovotante: estadovotante > 0});

            console.log("valor again:" + estadovotante);
        } */
        

    }).catch(err=>{
        console.log(err);
    });



    
    
};

//GET ELEGIR PRESIDENTE
exports.GetElegirPresidente = (req,res,next) => {  

    res.render("votaciones/elegirpuesto/elegir-presidente",{});
            
};

//GET ELEGIR ALCADE
exports.GetElegirAlcade = (req,res,next) => {  

    res.render("votaciones/elegirpuesto/elegir-alcade",{});
            
};

//GET ELEGIR SENADOR
exports.GetElegirSenador = (req,res,next) => {  

    res.render("votaciones/elegirpuesto/elegir-senador",{});
            
};

//GET ELEGIR DIPUTADO
exports.GetElegirDiputado = (req,res,next) => {  

    res.render("votaciones/elegirpuesto/elegir-diputado",{});
            
};

//GET SELECCION CANDIDATOS
exports.GetSeleccionCandidatos = (req,res,next) => {  

    const querypuestoId = req.query.puestoid;
    const puestoId = req.params.puestosId;
    
    Candidatos.findAll({where:{puestoId: puestoId}}).then((result)=>{


        const candidatosdelpuesto = result.map((result)=> result.dataValues);

        if(!candidatosdelpuesto){

            //error no hay candidatos en para este puesto
            return res.redirect("/");   
        }


        res.render("votaciones/elegirpuesto2/seleccion-candidatos",{candidatosdelpuesto: candidatosdelpuesto});

    }).catch(err=>{
        console.log(err);
    });



};
///////



//POST ELEGIR PUESTO 2
exports.PostElegirPuesto2 = (req,res,next) => {  

    
    const cedula = req.body.Cedula;
    //FIND ONE DE COMPROBACION ELECTOR ACTIVO IDENTIFICADOR 001
    Electores.findOne({where: {cedula: cedula}}).then((elector) => {

        
        if(!elector){

            //error cedula no existe
            res.redirect("/");


        }


        Elecciones.findOne({where:{estado: true}}).then((result) =>{



            estadoeleccion = 1;


            if(!result){
                estadoeleccion = -1;

            }

        const votante = elector.dataValues;


        switch(elector.estado){

            case "true":
                
                estadovotante = 1;

                console.log("valor xd:" + estadovotante);

                /////////////////////////////////////////////////////////////////
                Puestos.findAll().then((result) =>{
        
                    const puestos = result.map((result)=> result.dataValues);
            
                    console.log(puestos);

                    ///////////////////////////////
                        Elecciones.findAll().then((result) =>{
        
                        const elecciones = result.map((result)=> result.dataValues);
                            

                
                        res.render("votaciones/elegirpuesto2/elegir-puesto2",{votante: votante, estadoeleccion: estadoeleccion > 0, estadovotante: estadovotante > 0, puestos: puestos, hasElecciones: elecciones.length > 0, hasPuestos: puestos.length > 0});
    
                        }).catch(err=>{
                        console.log(err);
                        });
                    /////////////////////////////
                    /* res.render("votaciones/elegirpuesto2/elegir-puesto2",{votante: votante, estadovotante: estadovotante > 0, puestos: puestos, hasPuestos: puestos.length > 0}); */

                }).catch(err=>{
                console.log(err);
                });
                /////////////////////////////////////////////////////////////////
            break;

            case "false":
   
                estadovotante = -1;

                console.log("valor:" + estadovotante);
                
                Puestos.findAll().then((result) =>{
        
                    const puestos = result.map((result)=> result.dataValues);
            
                    console.log(puestos);
            
                                        ///////////////////////////////
                                        Elecciones.findAll().then((result) =>{
        
                                            const elecciones = result.map((result)=> result.dataValues);
                                                
                    
                                    
                                            res.render("votaciones/elegirpuesto2/elegir-puesto2",{votante: votante, estadoeleccion: estadoeleccion > 0, estadovotante: estadovotante > 0, puestos: puestos, hasElecciones: elecciones.length > 0, hasPuestos: puestos.length > 0});
                        
                                            }).catch(err=>{
                                            console.log(err);
                                            });
                                        /////////////////////////////
                    
                }).catch(err=>{
                console.log(err);
                });
            


            break;

                        };
                        //end del switch


        }).catch(err=>{
            console.log(err);
        });
                

    }).catch(err=>{
        console.log(err);
    });
    //IDENTIFICADOR 001


    
    
};

