const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Candidatos = sequelize.define("candidato",{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
nombre: {
    type: Sequelize.STRING,
    allowNull: false
},
apellido: {
    type: Sequelize.STRING,
    allowNull: false
},
estado: {
    type: Sequelize.STRING,
    allowNull: false
},
imagePath:{
    type: Sequelize.STRING,
    allowNull: true
},

});

module.exports = Candidatos;