
//cosas db(exportacion de los modelos)
const Elecciones = require("../models/Elecciones");

/////


//////////////////##############################################
//////////////////GET CRUD/////////////////////////////////////
//elecciones
exports.GetCrudElecciones = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;
    
    res.render("admins/elecciones/crud-elecciones",{EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////GETS AGREGAR///////////////////////////
//elecciones
exports.GetAgregarElecciones = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/elecciones/agregar-elecciones",{ModoEditar: false,EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////POooooST AGREGAR///////////////////////////
//elecciones
exports.PostAgregarElecciones = (req,res,next) => { 

    const nombreel = req.body.Nombreel;
    const fechael = req.body.Fechael;
    const estadoel = req.body.Estadoel;
                
    Elecciones.create({nombre: nombreel, fecha: fechael, estado: estadoel}).then(result=>{
        res.redirect("/crud-elecciones");
    }).catch(err=>{
        console.log(err);
    });
    
    };
    
//////////////////##############################################
/////////////////////////GET LISTAAAAAR///////////////////////////
//elecciones
exports.GetListarElecciones = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Elecciones.findAll().then((result) =>{
        

        const elecciones = result.map((result)=> result.dataValues);

        console.log(elecciones);


        res.render("admins/elecciones/listar-elecciones",{elecciones: elecciones, EstaAutenticado: loggedIn, hasElecciones: elecciones.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDITAAAAAAAAAAAR///////////////////////////
//electores
exports.GetEditarElecciones = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Elecciones.findAll().then((result) =>{
        

        const elecciones = result.map((result)=> result.dataValues);

        console.log(elecciones);


        res.render("admins/elecciones/editar-elecciones",{elecciones: elecciones, EstaAutenticado: loggedIn, hasElecciones: elecciones.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDICIOOOOOOOOOOOON//////////////////////////
//electores
exports.GetEdicionElecciones = (req,res,next) => {  

const loggedIn = req.session.loggedIn;

    const editar = req.query.editar;
    const eleccionId = req.params.eleccionesId;

    if(!editar){
        return res.redirect("/");
    }

    Elecciones.findOne({where:{id: eleccionId}}).then(result =>{

        const eleccion = result.dataValues;

        if(!eleccion){
            return res.redirect("/");   
        }

        res.render("admins/elecciones/agregar-elecciones",{ModoEditar: editar, EstaAutenticado: loggedIn, eleccion: eleccion});

    }).catch(err=>{
    console.log(err);
    });
           
};


//////////////////##############################################
/////////////////////////POOOOSTTTTT EDICIOOOOOOOOOOOON//////////////////////////
//electores
exports.PostEdicionElecciones = (req,res,next) => {
    const nombreel = req.body.Nombreel;
    const fechael = req.body.Fechael;
    const estadoel = req.body.Estadoel;
    const eleccionId = req.body.eleccionId;
    
    Elecciones.update({nombre: nombreel, fecha: fechael, estado: estadoel},{where: {id: eleccionId}}).then(result=>{
        return res.redirect("/editar-elecciones");
    }).catch(err=>{
        console.log(err);
    });

    
};


//////////////////##############################################
/////////////////////////GEEEET ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//elecciones
exports.GetEliminarElecciones = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Elecciones.findAll().then((result) =>{
        

        const elecciones = result.map((result)=> result.dataValues);

        console.log(elecciones);


        res.render("admins/elecciones/eliminar-elecciones",{elecciones: elecciones, EstaAutenticado: loggedIn, hasElecciones: elecciones.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////POOOOSTT ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//electores
exports.PostEliminarElecciones = (req,res,next) => { 
    const eleccionId = req.body.eleccionesId;
    
                
    Elecciones.destroy({where:{id: eleccionId}}).then(result=>{
        return res.redirect("/eliminar-elecciones");
    }).catch(err=>{
        console.log(err);
    });
    

};


//////////////////##############################################