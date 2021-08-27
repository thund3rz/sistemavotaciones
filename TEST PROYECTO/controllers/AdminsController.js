
//cosas db(exportacion de los modelos)

const bcrypt = require("bcryptjs");

const Admins = require("../models/Admins");

/////


//////////#######LOGIN/PANEL DE ADMIN################
//GET LOGIN
exports.GetLogin = (req,res,next) => {  


    res.render("admins/login",{});
            
};


//GET PANEL
exports.GetPanel = (req,res,next) => {  

    
    const loggedIn = req.session.loggedIn;
    

    res.render("admins/panel",{EstaAutenticado: loggedIn});
            
};

/////
////////POooooST AGREGAR//
exports.PostAgregarAdmins = (req,res,next) => { 
    const nombrea = req.body.Nombrea;
    const correoa = req.body.Correoa;
    const passworda = req.body.Passworda;
    
    bcrypt.hash(passworda,12).then(hassedPassword=>{

        Admins.create({nombre: nombrea, password: hassedPassword, correo: correoa}).then(result=>{
            res.redirect("/panel");
        }).catch(err=>{
            console.log(err);
        });

    }).catch(err=>{
        console.log(err);
    });
    

    };


//GET Agregar
exports.GetAgregarAdmins = (req,res,next) => {  

    
    const loggedIn = req.session.loggedIn;
    

    res.render("admins/agregar-admins",{EstaAutenticado: loggedIn});
            
};

//post set session
exports.PostSetSession = (req,res,next) => {  


    const email = req.body.email;
    const password = req.body.password;

    Admins.findOne({where: {correo: email}}).then((admin) => {

        if(!admin){

            res.redirect("/login"); 

        }

        bcrypt.compare(password, admin.password).then(result=>{

            if(result){
                req.session.loggedIn = true;
                req.session.usuario = admin;
                req.session.emailusuario = admin.correo;
                return req.session.save(err=>{
                    console.log(err);
                    res.redirect("/panel"); 
                })

            }

            res.redirect("/login"); 

        }).catch(err=>{
            console.log(err);
            return res.redirect("login");
        });



    }).catch(err=>{
        console.log(err);
    });

};


//post logout
exports.PostLogOut = (req,res,next) => {  

    req.session.destroy(err=>{
      console.log(err);
      
      res.redirect("/");  
    })

          
};










//POST SET COOKIE (no esta siendo usado)
exports.PostSetCookie = (req,res,next) => {  

    res.setHeader("Set-Cookie","loggedIn=true; expires=" + new Date(new Date().getTime() + 86409000).toUTCString());
    
    res.redirect("/panel");
    
    /* const cookie = req.get("Cookie");
    let loggedIn = false;
    
        if(cookie){
            loggedIn = cookie.split("=")[1];
        }
    
        res.render("admins/panel",{EstaAutenticado: loggedIn}); */
               
    };
//////////////////##############################################
