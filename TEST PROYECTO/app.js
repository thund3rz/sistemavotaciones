const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");
const session = require("express-session");

const multer = require("multer");
const {v4: uuidv4} = require("uuid");
//cosas de la DB///////////////////////////////////////
const sequelize = require("./util/database");

//// proyecto final
const Candidatos = require("./models/Candidatos");
const Electores = require("./models/Electores");
const Partidos = require("./models/Partidos");
const Puestos = require("./models/Puestos");
const Admins = require("./models/Admins");
///////////////////////////////////////////////////////

const errorController = require("./controllers/ErrorController");

const app = express();

app.engine("hbs",expressHbs({layoutsDir:"views/layouts/",defaultLayout:"main-layout",extname:"hbs"}));

app.set("view engine","hbs");
app.set("views","views");

app.use(express.urlencoded({extended: false}));

const fileStorage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"images");
    },
    filename: (req,file,cb) =>{
        cb(null, uuidv4() + "-" + file.originalname)
    }
})

app.use(multer({storage: fileStorage}).single("ImagePath"));

app.use(express.static(path.join(__dirname,"public")));

app.use("/images",express.static(path.join(__dirname,"images")));

//SESIONES
app.use(session({secret: "anything", resave: true, saveUninitialized: false}));


//ruta index
const indexRouter = require("./routes/index");


/////RUTAS PROYECTO FINAL/////////////////////////////
const votacionesRouter = require("./routes/votaciones");

const adminsRouter = require("./routes/admins");

const electoresRouter = require("./routes/electores");

const candidatosRouter = require("./routes/candidatos");

const partidosRouter = require("./routes/partidos");

const puestosRouter = require("./routes/puestos");

const eleccionesRouter = require("./routes/elecciones");

const { ppid } = require("process");
/////////////////////////////////////////////////////

//index
app.use(indexRouter);


/////RUTAS PROYECTO FINAL/////////////////////////////
app.use(votacionesRouter);

app.use(adminsRouter);

app.use(electoresRouter);

app.use(candidatosRouter);

app.use(partidosRouter);

app.use(puestosRouter);

app.use(eleccionesRouter);
/////////////////////////////////////////////////////


app.use(errorController.Get404);


// cosas de la DB proyecto final
Candidatos.belongsTo(Partidos,{constraint: true, onDelete: "CASCADE"});
Partidos.hasMany(Candidatos);
Candidatos.belongsTo(Puestos,{constraint: true, onDelete: "CASCADE"});
Puestos.hasMany(Candidatos);
/////

sequelize.sync().then(function(result){
    app.listen(3347);

}).catch(err =>{
    console.log(err);
});
///






//ME QUEDE EN EL MINUTO 1:20:20 DE LA 1RA PARTE PARTE, MANTENIMIENTO HECHO PERO SIN DATA

//ME QUEDE 1:45:58 ESPERANDO QUE EL PROFE RESUELVA EL ERROR DE PORQUE NO CREA LAS TABLAS

