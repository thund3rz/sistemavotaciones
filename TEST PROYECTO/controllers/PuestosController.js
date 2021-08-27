
//cosas db(exportacion de los modelos)

const Puestos = require("../models/Puestos");
/////

//////////////////##############################################
//////////////////GET CRUD/////////////////////////////////////
//puestos
exports.GetCrudPuestos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/puestos/crud-puestos",{EstaAutenticado: loggedIn});
            
};


//////////////////##############################################
/////////////////////////GET AGREGAR///////////////////////////
//puestos
exports.GetAgregarPuestos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/puestos/agregar-puestos",{ModoEditar: false, EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////POooooST AGREGAR///////////////////////////
//puestos
exports.PostAgregarPuestos = (req,res,next) => { 
    const nombrepu = req.body.Nombrepu;
    const estadopu = req.body.Estadopu;


    Puestos.create({nombre: nombrepu, estado: estadopu}).then(result=>{
        res.redirect("/crud-puestos");
        }).catch(err=>{
        console.log(err);
        });
        
};


//////////////////##############################################
/////////////////////////GET LISTAAAAAR///////////////////////////
//puestos
exports.GetListarPuestos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Puestos.findAll().then((result) =>{
        

        const puestos = result.map((result)=> result.dataValues);

        console.log(puestos);


        res.render("admins/puestos/listar-puestos",{puestos: puestos, EstaAutenticado: loggedIn, hasPuestos: puestos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDITAAAAAAAAAAAR///////////////////////////
//puestos
exports.GetEditarPuestos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Puestos.findAll().then((result) =>{
        

        const puestos = result.map((result)=> result.dataValues);

        console.log(puestos);


        res.render("admins/puestos/editar-puestos",{puestos: puestos, EstaAutenticado: loggedIn, hasPuestos: puestos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};

//////////////////##############################################
/////////////////////////GET EDICIOOOOOOOOOOOON//////////////////////////

//puestos
exports.GetEdicionPuestos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;
    
    const editar = req.query.editar;
    const puestoId = req.params.puestosId;

    if(!editar){
        return res.redirect("/");
    }

    Puestos.findOne({where:{id: puestoId}}).then(result =>{

        const puesto = result.dataValues;

        if(!puesto){
            return res.redirect("/");   
        }

        res.render("admins/puestos/agregar-puestos",{ModoEditar: editar, EstaAutenticado: loggedIn, puesto: puesto});

    }).catch(err=>{
    console.log(err);
    });
           
};


//////////////////##############################################
/////////////////////////POOOOSTTTTT EDICIOOOOOOOOOOOON//////////////////////////
//puestos
exports.PostEdicionPuestos = (req,res,next) => {
    const nombrepu = req.body.Nombrepu;
    const estadopu = req.body.Estadopu;
    const puestoId = req.body.puestoId;
    
    Puestos.update({nombre: nombrepu, estado: estadopu},{where: {id: puestoId}}).then(result=>{
        return res.redirect("/editar-puestos");
    }).catch(err=>{
        console.log(err);
    });

    
};

//////////////////##############################################
/////////////////////////GEEEET ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//puestos
exports.GetEliminarPuestos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Puestos.findAll().then((result) =>{
        

        const puestos = result.map((result)=> result.dataValues);

        console.log(puestos);


        res.render("admins/puestos/eliminar-puestos",{puestos: puestos, EstaAutenticado: loggedIn, hasPuestos: puestos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////POOOOSTT ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//puestos
exports.PostEliminarPuestos = (req,res,next) => { 
    const puestoId = req.body.puestosId;
    
                
    Puestos.destroy({where:{id: puestoId}}).then(result=>{
        return res.redirect("/eliminar-puestos");
    }).catch(err=>{
        console.log(err);
    });
    

};

//////////////////##############################################