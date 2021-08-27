
//cosas db(exportacion de los modelos)

const Partidos = require("../models/Partidos");
/////

//////////////////##############################################
//////////////////GET CRUD/////////////////////////////////////
//partidos
exports.GetCrudPartidos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/partidos/crud-partidos",{EstaAutenticado: loggedIn});
            
};


//////////////////##############################################
/////////////////////////GET AGREGAR///////////////////////////
//partidos
exports.GetAgregarPartidos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    res.render("admins/partidos/agregar-partidos",{ModoEditar: false, EstaAutenticado: loggedIn});
            
};

//////////////////##############################################
/////////////////////////POooooST AGREGAR///////////////////////////
//partidos
exports.PostAgregarPartidos = (req,res,next) => { 
    const nombrep = req.body.Nombrep;
    const descripcionp = req.body.Descripcionp;
    const estadop = req.body.Estadop;
    const image = req.file;

    Partidos.create({nombre: nombrep, descripcion: descripcionp, estado: estadop, imagePath: "/"+image.path}).then(result=>{
        res.redirect("/crud-partidos");
        }).catch(err=>{
        console.log(err);
        });
        
};


//////////////////##############################################
/////////////////////////GET LISTAAAAAR///////////////////////////
//partidos
exports.GetListarPartidos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Partidos.findAll().then((result) =>{
        

        const partidos = result.map((result)=> result.dataValues);

        console.log(partidos);


        res.render("admins/partidos/listar-partidos",{partidos: partidos, EstaAutenticado: loggedIn, hasPartidos: partidos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////GET EDITAAAAAAAAAAAR///////////////////////////
//partidos
exports.GetEditarPartidos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Partidos.findAll().then((result) =>{
        

        const partidos = result.map((result)=> result.dataValues);

        console.log(partidos);


        res.render("admins/partidos/editar-partidos",{partidos: partidos, EstaAutenticado: loggedIn, hasPartidos: partidos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};

//////////////////##############################################
/////////////////////////GET EDICIOOOOOOOOOOOON//////////////////////////

//partidos
exports.GetEdicionPartidos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;
    
    const editar = req.query.editar;
    const partidoId = req.params.partidosId;

    if(!editar){
        return res.redirect("/");
    }

    Partidos.findOne({where:{id: partidoId}}).then(result =>{

        const partido = result.dataValues;

        if(!partido){
            return res.redirect("/");   
        }

        res.render("admins/partidos/agregar-partidos",{ModoEditar: editar, EstaAutenticado: loggedIn, partido: partido});

    }).catch(err=>{
    console.log(err);
    });
           
};


//////////////////##############################################
/////////////////////////POOOOSTTTTT EDICIOOOOOOOOOOOON//////////////////////////
//partidos
exports.PostEdicionPartidos = (req,res,next) => {
    const nombrep = req.body.Nombrep;
    const descripcionp = req.body.Descripcionp;
    const estadop = req.body.Estadop;
    const partidoId = req.body.partidoId;
    const imagePartido = req.file;
    
    Partidos.findOne({where:{id: partidoId}}).then((result) =>{

        const partido = result.dataValues;

        if(!partido){
            return res.redirect("/"); 
        }
        
        const imagePath = imagePartido ? "/" + imagePartido.path : partido.imagePath;

        Partidos.update({nombre: nombrep, descripcion: descripcionp, estado: estadop, imagePath: imagePath},{where: {id: partidoId}}).then(result=>{
            return res.redirect("/editar-partidos");
        }).catch(err=>{
            console.log(err);
        });



    }).catch(err=>{
        console.log(err);
    });


    
};

//////////////////##############################################
/////////////////////////GEEEET ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//partidos
exports.GetEliminarPartidos = (req,res,next) => {  

    const loggedIn = req.session.loggedIn;

    Partidos.findAll().then((result) =>{
        

        const partidos = result.map((result)=> result.dataValues);

        console.log(partidos);


        res.render("admins/partidos/eliminar-partidos",{partidos: partidos, EstaAutenticado: loggedIn, hasPartidos: partidos.length > 0});
    }).catch(err=>{
    console.log(err);
    });

    
        
};


//////////////////##############################################
/////////////////////////POOOOSTT ELIMINAAAAAAAAAAAAAAAAAAAR//////////////////////////
//partidos
exports.PostEliminarPartidos = (req,res,next) => { 
    const partidoId = req.body.partidosId;
    
                
    Partidos.destroy({where:{id: partidoId}}).then(result=>{
        return res.redirect("/eliminar-partidos");
    }).catch(err=>{
        console.log(err);
    });
    

};

//////////////////##############################################