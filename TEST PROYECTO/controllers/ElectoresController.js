
//cosas db(exportacion de los modelos)

const Electores = require("../models/Electores");

/////

//////////////////##############################################
//////////////////GET CRUD/////////////////////////////////////
//electores
exports.GetCrudElectores = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/electores/crud-electores",{EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////GETS AGREGAR///////////////////////////
//electores
exports.GetAgregarElectores = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/electores/agregar-electores",{ModoEditar: false,EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////POooooST AGREGAR///////////////////////////
//electores
exports.PostAgregarElectores = (req,res,next) => { 
    const cedulae = req.body.Cedulae;
    const nombree = req.body.Nombree;
    const apellidoe = req.body.Apellidoe;
    const correoe = req.body.Correoe;
    const estadoe = req.body.Estadoe;
                
    Electores.create({cedula: cedulae, nombre: nombree, apellido: apellidoe, correo: correoe,estado: estadoe}).then(result=>{
        res.redirect("/crud-electores");
    }).catch(err=>{
        console.log(err);
    });
    
    };
    
//////////////////##############################################
/////////////////////////GET LISTAAAAAR///////////////////////////
//electores
exports.GetListarElectores = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Electores.findAll().then((result) =>{
        

        const electores = result.map((result)=> result.dataValues);

        console.log(electores);


        res.render("admins/electores/listar-electores",{electores: electores, EstaAutenticado: loggedIn,hasElectores: electores.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDITAAAAAAAAAAAR///////////////////////////
//electores
exports.GetEditarElectores = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Electores.findAll().then((result) =>{
        

        const electores = result.map((result)=> result.dataValues);

        console.log(electores);


        res.render("admins/electores/editar-electores",{electores: electores, EstaAutenticado: loggedIn, hasElectores: electores.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDICIOOOOOOOOOOOON//////////////////////////
//electores
exports.GetEdicionElectores = (req,res,next) => {  

const loggedIn = req.session.loggedIn;

    const editar = req.query.editar;
    const electorId = req.params.electoresId;

    if(!editar){
        return res.redirect("/");
    }

    Electores.findOne({where:{id: electorId}}).then(result =>{

        const elector = result.dataValues;

        if(!elector){
            return res.redirect("/");   
        }

        res.render("admins/electores/agregar-electores",{ModoEditar: editar, EstaAutenticado: loggedIn, elector: elector});

    }).catch(err=>{
    console.log(err);
    });
           
};


//////////////////##############################################
/////////////////////////POOOOSTTTTT EDICIOOOOOOOOOOOON//////////////////////////
//electores
exports.PostEdicionElectores = (req,res,next) => {
    const cedulae = req.body.Cedulae;
    const nombree = req.body.Nombree;
    const apellidoe = req.body.Apellidoe;
    const correoe = req.body.Correoe;
    const estadoe = req.body.Estadoe;
    const electorId = req.body.electorId;
    
    Electores.update({cedula: cedulae, nombre: nombree, apellido: apellidoe, correo: correoe,estado: estadoe},{where: {id: electorId}}).then(result=>{
        return res.redirect("/editar-electores");
    }).catch(err=>{
        console.log(err);
    });

    
};


//////////////////##############################################
/////////////////////////GEEEET ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//electores
exports.GetEliminarElectores = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Electores.findAll().then((result) =>{
        

        const electores = result.map((result)=> result.dataValues);

        console.log(electores);


        res.render("admins/electores/eliminar-electores",{electores: electores, EstaAutenticado: loggedIn, hasElectores: electores.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////POOOOSTT ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//electores
exports.PostEliminarElectores = (req,res,next) => { 
    const electorId = req.body.electoresId;
    
                
    Electores.destroy({where:{id: electorId}}).then(result=>{
        return res.redirect("/eliminar-electores");
    }).catch(err=>{
        console.log(err);
    });
    

};


//////////////////##############################################