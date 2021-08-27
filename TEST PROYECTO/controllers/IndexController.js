exports.GetIndex = (req,res,next) => {  //ELEMENTO MIN 22:20 1RA PARTE

    const loggedIn = req.session.loggedIn;

    res.render("index/index",{EstaAutenticado: loggedIn});
    
    };

