
//cosas db(exportacion de los modelos)
const Candidatos = require("../models/Candidatos");
const Partidos = require("../models/Partidos");
const Puestos = require("../models/Puestos");
/////
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
service: "gmail",
auth:{
    user: "elcorreodedondeenvias@gmail.com",
    pass: "lapassword"
}

});




//////////////////##############################################
//////////////////GET CRUD/////////////////////////////////////
//candidatos
exports.GetCrudCandidatos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/candidatos/crud-candidatos",{EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////GET AGREGAR///////////////////////////
//candidatos
exports.GetAgregarCandidatos = (req,res,next) => {  //ESTE ESTA UN POCO DIFERENTE A LOS DEMAS PORQUE LOS CANDIDATOS TIENEN VALIDACION DE LOS PARTIDOS

    const loggedIn = req.session.loggedIn;
    const emailadmin = req.session.emailusuario;

    Partidos.findAll().then((result)=>{

        const partidos = result.map((result)=> result.dataValues);
        
        ////////

        Puestos.findAll().then((result)=>{

            const puestos = result.map((result)=> result.dataValues);
                
            res.render("admins/candidatos/agregar-candidatos",{ModoEditar: false, partidos: partidos, puestos: puestos, EstaAutenticado: loggedIn, emailadmin: emailadmin,hasPartidos: partidos.length > 0, hasPuestos: puestos.length > 0});
    
        }).catch(err=>{
            console.log(err);
        });

        ////////

        /* res.render("admins/candidatos/agregar-candidatos",{ModoEditar: false, partidos: partidos, EstaAutenticado: loggedIn,hasPartidos: partidos.length > 0}); */

    }).catch(err=>{
        console.log(err);
    });

    
            
};

//////////////////##############################################
/////////////////////////POooooST AGREGAR///////////////////////////    
    //candidatos
    exports.PostAgregarCandidatos = (req,res,next) => { 
        const nombrec = req.body.Nombrec;
        const apellidoc = req.body.Apellidoc;
        const partidoc = req.body.Partidoc;
        const puestoc = req.body.Puestoc;
        const estadoc = req.body.Estadoc;
        const image = req.file;

        Candidatos.create({nombre: nombrec, apellido: apellidoc, partidoId: partidoc, puestoId: puestoc, estado: estadoc, imagePath: "/"+image.path}).then(result=>{
            res.redirect("/crud-candidatos");

            return transporter.sendMail({
                from: "elcorreodedondeenvias@gmail.com",
                to: "tucorreo@gmail.com",
                subject: "Sistema de votaciones de Alonso Ramirez 2018-6877",
                html: `<h2>El candidato ${nombrec} ${apellidoc} para puesto ID ${puestoc} se ha creado correctamente.</h2>`
            });

        }).catch(err=>{
            console.log(err);
        });
        
        };
    

//////////////////##############################################
/////////////////////////GET LISTAAAAAR///////////////////////////

//candidatos
exports.GetListarCandidatos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Candidatos.findAll().then((result) =>{
        

        const candidatos = result.map((result)=> result.dataValues);

        console.log(candidatos);


        res.render("admins/candidatos/listar-candidatos",{candidatos: candidatos, EstaAutenticado: loggedIn, hasCandidatos: candidatos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDITAAAAAAAAAAAR///////////////////////////
//candidatos
exports.GetEditarCandidatos = (req,res,next) => {  

const loggedIn = req.session.loggedIn;

    Candidatos.findAll().then((result) =>{
        

        const candidatos = result.map((result)=> result.dataValues);

        console.log(candidatos);


        res.render("admins/candidatos/editar-candidatos",{candidatos: candidatos, EstaAutenticado: loggedIn, hasCandidatos: candidatos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};

//////////////////##############################################
/////////////////////////GET EDICIOOOOOOOOOOOON//////////////////////////
//candidatos
exports.GetEdicionCandidatos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    const editar = req.query.editar;
    const candidatoId = req.params.candidatosId;

    if(!editar){
        return res.redirect("/");
    }

    Candidatos.findOne({where:{id: candidatoId}}).then(result =>{

        const candidato = result.dataValues;

        if(!candidato){
            return res.redirect("/");   
        }
        
        ///////////////////////////////////////////////////
        Partidos.findAll().then((result)=>{

            const partidos = result.map((result)=> result.dataValues);
    
        /////////////////////////////
        Puestos.findAll().then((result)=>{

            const puestos = result.map((result)=> result.dataValues);
    
            res.render("admins/candidatos/agregar-candidatos",{ModoEditar: editar, candidato: candidato, EstaAutenticado: loggedIn, partidos: partidos, hasPartidos: partidos.length > 0, puestos: puestos, hasPuestos: puestos.length > 0});
    
        }).catch(err=>{
            console.log(err);
        });
        /////////////////////////////    

    
        }).catch(err=>{
            console.log(err);
        });
        ///////////////////////////////////////////////////

    }).catch(err=>{
    console.log(err);
    });
           
};


//////////////////##############################################
/////////////////////////POOOOSTTTTT EDICIOOOOOOOOOOOON//////////////////////////
//candidatos
exports.PostEdicionCandidatos = (req,res,next) => {
    const nombrec = req.body.Nombrec;
    const apellidoc = req.body.Apellidoc;
    const partidoc = req.body.Partidoc;
    const puestoc = req.body.Puestoc;
    const estadoc = req.body.Estadoc;
    const candidatoId = req.body.candidatoId;
    const imageCandidato = req.file;


    Candidatos.findOne({where:{id: candidatoId}}).then((result) =>{

        const candidato = result.dataValues;

        if(!candidato){
            return res.redirect("/"); 
        }
        
        const imagePath = imageCandidato ? "/" + imageCandidato.path : candidato.imagePath;


        Candidatos.update({nombre: nombrec, apellido: apellidoc, partidoId: partidoc, puestoId: puestoc, estado: estadoc,imagePath: imagePath},{where: {id: candidatoId}}).then(result=>{
            return res.redirect("/editar-candidatos");
        }).catch(err=>{
            console.log(err);
        });


    }).catch(err=>{
        console.log(err);
    });


    
};

//////////////////##############################################
/////////////////////////GEEEET ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//candidatos
exports.GetEliminarCandidatos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Candidatos.findAll().then((result) =>{
        

        const candidatos = result.map((result)=> result.dataValues);

        console.log(candidatos);


        res.render("admins/candidatos/eliminar-candidatos",{candidatos: candidatos, EstaAutenticado: loggedIn, hasCandidatos: candidatos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};



//////////////////##############################################
/////////////////////////POOOOSTT ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//candidatos
exports.PostEliminarCandidatos = (req,res,next) => { 
    const candidatoId = req.body.candidatosId;
    
                
    Candidatos.destroy({where:{id: candidatoId}}).then(result=>{
        return res.redirect("/eliminar-Candidatos");
    }).catch(err=>{
        console.log(err);
    });
    

};

//////////////////##############################################